import React from 'react';

import Select, { components } from 'react-select';
import { BiChevronDown } from 'react-icons/bi';

const SelectBox = (props:any) => {

  const [options, setOptions] = React.useState(props.options);
  const [selectedOption, setSelectedOption] = React.useState(props.selectedOption ?? null);

  React.useEffect(() => {
    setOptions(props.options)
  }, [props.options])

  React.useEffect(() => {
    setSelectedOption(props.selectedOption)
  }, [props.selectedOption])

  const handleChange = (value: any) => {
    setSelectedOption(value)
    props.setSelectedOption(value)
    props.onChange && props.onChange(value)
  };

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <BiChevronDown color="#9F9FB5" />
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      instanceId={props.id}
      isMulti={props.isMulti ? true : false}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder={props.placeholder ?? ""}
      className={props.className??""}
      components={{ DropdownIndicator }}
      styles={{
        option: (provided, state) => ({
          // ...provided,
          width: 'auto',
          height: 40,
          backgroundColor: state.isSelected ? '#f0f2f5' : state.isFocused ? '#f5f8fa' : 'transparent',
          color: '#656565',
          marginLeft: 5,
          marginRight: 5,
          marginTop: 3,
          marginBottom: 3,
          paddingLeft: 10,
          display: 'flex',
          alignItems: 'center',
          // border: '1px solid #e5e5e5',
          // borderRadius: 4
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: props.width ?? 'auto',
          height: props.height ?? 55,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 4,
          backgroundColor: props.backColor === 'primary' ? '#f26522' : props.backColor === 'secondary' ? '#282a2f' : 'transparent',
          border: `1px solid ${props.backColor === 'transparent' ? '#E5E7EB' : '#D5DBEC'}`,
        }),
        placeholder: () => ({
          color: 'grayText',
          fontSize: 13,
          fontWeight: 700
        }),
        indicatorSeparator: () => ({}),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: props.backColor === 'transparent' ? '#656565 !important' : ''
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          const color = '#232323';  //props.backColor === 'transparent' ? '#656565' : 'white';
          const fontSize = 13;
          const fontWeight = 400;
          return { ...provided, opacity, transition, color, fontSize, fontWeight };
        }
      }}
    />
  )
}

export default SelectBox