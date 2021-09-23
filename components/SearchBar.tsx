import { Fragment, useState, useEffect } from "react";
import {
  SimpleGrid,
  Flex,
  Box,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { fetchDistricts } from "rdx/slices/district";
import { fetchSubDistricts } from "rdx/slices/subDistrict";
import { fetchVillages } from "rdx/slices/village";
import { setVillage } from "rdx/slices/browsePage";
import { OurStore } from "rdx/store";

import SelectBox from "components/widgets/SelectBox";
import { District, SubDistrict, Village } from "types/schema";

const SearchBar = (props) => {
  const breakpointValue = useBreakpointValue({ base: "base", md: "md" });

  const dispatch = useDispatch();
  const { status: districtStatus, districts } = useSelector(
    (state: OurStore) => state.districtReducer
  );
  const { status: subDistrictStatus, subDistricts } = useSelector(
    (state: OurStore) => state.subDistrictReducer
  );
  const { status: villageStatus, villages } = useSelector(
    (state: OurStore) => state.villageReducer
  );

  const [selectedDistrict, setSelectedDistrict] = useState<District>(null);
  const [selectedSubDistrict, setSelectedSubDistrict] = useState<SubDistrict>(null);
  // const [selectedVillage, setSelectedVillage] = useState<Village>(null);
  
  useEffect(() => {
    dispatch(fetchDistricts());
  }, []);
  useEffect(()=>{
    setSelectedSubDistrict(null)
    dispatch(fetchSubDistricts({district: selectedDistrict?.href}));
  }, [selectedDistrict])
  useEffect(()=>{
    props.setSelectedVillage(null)
    dispatch(fetchVillages({subDistrict: selectedSubDistrict?.href}));
  }, [selectedSubDistrict])

  return (
    <Fragment>
      <Flex justifyContent="center">
        <SimpleGrid w="full" columns={{ base: 1, md: 3 }} spacing={6}>
          <SelectBox
            id="district"
            placeholder="Select District"
            height="45px"
            options={districts}
            optionLabel={({ name }) => name}
            selectedOption={selectedDistrict}
            setSelectedOption={setSelectedDistrict}
          />
          <SelectBox
            id="subdistrict"
            placeholder="Select Upazila"
            height="45px"
            options={subDistricts}
            optionLabel={({ name }) => name}
            selectedOption={selectedSubDistrict}
            setSelectedOption={setSelectedSubDistrict}
          />
          <SelectBox
            id="village"
            placeholder="Select Village"
            height="45px"
            options={villages}
            optionLabel={({ name }) => name}
            selectedOption={props.selectedVillage}
            setSelectedOption={props.setSelectedVillage}
          />
        </SimpleGrid>
        {breakpointValue === "md" && (
          <Box>
            <Button
              w="165px"
              h="full"
              bgColor="purpleTone"
              fontSize="13px"
              fontWeight="400"
              color="white"
              borderRadius="6px"
              _focus={{boxShadow: "none"}}
              ml={6}
              onClick={()=>{dispatch(setVillage(props.selectedVillage))}}
            >
              Find
            </Button>
          </Box>
        )}
      </Flex>

      {breakpointValue === "base" && (
        <Button
          w="full"
          h="45px"
          bgColor="purpleTone"
          fontSize="13px"
          fontWeight="400"
          color="white"
          borderRadius="6px"
          mt={6}
        >
          Find
        </Button>
      )}
    </Fragment>
  );
};

export default SearchBar;
