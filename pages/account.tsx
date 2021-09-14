import React, { Fragment, useState } from "react";
import type { NextPage } from "next";

import {
  Container,
  HStack,
  VStack,
  Divider,
  Flex,
  Box,
  Text,
  Image,
  Avatar,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  SimpleGrid,
  Input,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import Header from "components/Header";
import Footer from "components/Footer";
import PageTitle from "components/widgets/PageTitle";
import SelectBox from "components/widgets/SelectBox";

const Account: NextPage = () => {
  const breakpointValue = useBreakpointValue({ base: "base", md: "md" });

  const [firstname, setFirstname] = useState<string | null>(null);
  const [lastname, setLastname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  type Degree = {
    id: number;
    label: string;
    value: string;
  };
  const degrees: Degree[] = [
    {
      id: 0,
      label: "Master",
      value: "master",
    },
    {
      id: 1,
      label: "Bachelor's",
      value: "bachelor",
    },
  ];
  const [selectedDegree, setSelectedDegree] = useState(null);

  type GraduateIn = {
    id: number;
    label: string;
    value: string;
  };
  const graduatedIns: GraduateIn[] = [
    {
      id: 0,
      label: "Canada",
      value: "canada",
    },
    {
      id: 1,
      label: "USA",
      value: "usa",
    },
    {
      id: 1,
      label: "Bangladesh",
      value: "bangladesh",
    },
  ];
  const [selectedGraduatedIn, setSelectedGraduatedIn] = useState(null);

  const [university, setUniversity] = useState<string | null>(null);

  type District = {
    id: number;
    label: string;
    value: string;
  };
  const districts: District[] = [
    {
      id: 0,
      label: "Dinajpur",
      value: "dinajpur",
    },
    {
      id: 1,
      label: "Bogra",
      value: "bogra",
    },
  ];
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  type Upazila = {
    id: number;
    label: string;
    value: string;
  };
  const upazilas: Upazila[] = [
    {
      id: 0,
      label: "Upazila1",
      value: "upazila1",
    },
    {
      id: 1,
      label: "Upazila2",
      value: "upazila2",
    },
  ];
  const [selectedUpazila, setSelectedUpazila] = useState(null);

  const [village, setVillage] = useState<string | null>(null);

  return (
    <Fragment>
      <Header />
      <Container maxW="full" p={6}>
        <Flex justifyContent="space-between" mt={4}>
          <PageTitle title="Account" />
        </Flex>

        <HStack spacing={6} mt={12} align="start">
          <Box w="full">
            {
              breakpointValue === 'base' && 
              <AvatarUpload />
            }
            <Flex flexDirection="column" bgColor="white" p={6}>
              <Text fontSize="12px" fontWeight="800">
                USER DETAILS
              </Text>
              <Divider my={6} />
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box>
                  <Text fontSize="13px" fontWeight="700" mb={4}>
                    General information
                  </Text>
                  <InputBox label="First name" onChange={setFirstname} />
                  <InputBox label="Last name" onChange={setLastname} />
                  <InputBox label="Email" onChange={setEmail} />
                  <InputBox label="Password" onChange={setPassword} />
                </Box>
                <Box>
                  <Text fontSize="13px" fontWeight="700" mb={4}>
                    Education info
                  </Text>
                  <InputBoxWithSelect
                    label="Degree"
                    options={degrees}
                    selectedOption={selectedDegree}
                    setSelectedOption={setSelectedDegree}
                  />
                  <InputBoxWithSelect
                    label="Graduated in"
                    options={graduatedIns}
                    selectedOption={selectedGraduatedIn}
                    setSelectedOption={setSelectedDegree}
                  />
                  <InputBox label="University" onChange={setUniversity} />
                </Box>
                <Box>
                  <Text fontSize="13px" fontWeight="700" mb={4}>
                    Location
                  </Text>
                  <InputBoxWithSelect
                    label="District"
                    options={districts}
                    selectedOption={selectedDistrict}
                    setSelectedOption={setSelectedDistrict}
                  />
                  <InputBoxWithSelect
                    label="Upazila"
                    options={upazilas}
                    selectedOption={selectedUpazila}
                    setSelectedOption={setSelectedUpazila}
                  />
                  <InputBox label="Village" onChange={setVillage} />
                </Box>
              </SimpleGrid>
            </Flex>
            <HStack w={{ base: "100%", md: "50%" }} mt={10}>
              <Button
                w="50%"
                bgColor="purpleTone"
                fontSize="12px"
                fontWeight="800"
                color="white"
              >
                SAVE
              </Button>
              <Button
                w="50%"
                bgColor="transparent"
                fontSize="12px"
                fontWeight="800"
                color="purpleTone"
                variant="ghost"
              >
                CANCEL
              </Button>
            </HStack>
          </Box>

          {breakpointValue === "md" && (
            <Box w="40%">
              <AvatarUpload />
            </Box>
          )}
        </HStack>
      </Container>

      <Box mt={20}>
        <Footer />
      </Box>
    </Fragment>
  );
};

const InputBox: React.FC<{
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ label, onChange }) => {
  return (
    <Fragment>
      <HStack mt={4}>
        <Text w="40%" fontSize="13px" fontWeight="400" color="GrayText">
          {label}
        </Text>
        <Box w="full">
          <Input onChange={(e) => onChange(e.target.value)} />
        </Box>
      </HStack>
    </Fragment>
  );
};

const InputBoxWithSelect: React.FC<{
  label: string;
  options: any[];
  selectedOption: any;
  setSelectedOption: React.Dispatch<React.SetStateAction<any | null>>;
}> = ({ label, options, selectedOption, setSelectedOption }) => {
  return (
    <Fragment>
      <HStack mt={4}>
        <Text w="40%" fontSize="13px" fontWeight="400" color="GrayText">
          {label}
        </Text>
        <Box w="full">
          <SelectBox
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            width="full"
            height="40px"
          />
        </Box>
      </HStack>
    </Fragment>
  );
};

const AvatarUpload = () => {
  return (
    <Fragment>
      <Flex flexDirection="column" bgColor="white" p={6}>
        <Text fontSize="12px" fontWeight="800">
          AVATAR
        </Text>
        <Divider my={6} />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/icons/upload-photo.svg"
            w="80px"
            h="80px"
            alt=""
            mt={8}
          />
          <Button
            h="25px"
            color="purpleTone"
            fontSize="12px"
            fontWeight="800"
            border="1px"
            borderColor="gray.300"
            borderRadius="full"
            mt={8}
          >
            UPLOAD AVATAR
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Account;