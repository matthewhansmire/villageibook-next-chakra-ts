import { Fragment } from "react";
import { useRouter } from "next/router";
import {
  HStack,
  VStack,
  Divider,
  SimpleGrid,
  GridItem,
  Flex,
  Box,
  Image,
  Text,
  Badge,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import type { Institution } from "data/myPage";

const InstitutionCard: React.FC<{ institution: Institution }> = ({
  institution,
}) => {
  const router = useRouter();
  const { pathname } = router;

  const breakpointValue = useBreakpointValue({ base: "base", md: "md" });

  return (
    <Fragment>
      <SimpleGrid
        w="full"
        columns={{ base: 5, md: 6 }}
        gap={2}
        p={2}
        border="1px"
        borderColor="gray.300"
        borderRadius="5px"
      >
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Image src={institution.img} w="full" h="full" fit="cover" alt="" borderRadius="4px" />
        </GridItem>
        <GridItem
          colSpan={{ base: 3, md: 4 }}
          p={{ base: 0, md: 2 }}
        >
          <Flex
            h="full"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text
              fontSize="12px"
              fontWeight="400"
              color="GrayText"
              textTransform="capitalize"
            >
              {institution.category}
            </Text>
            <Text
              fontSize="18px"
              color="primary"
              textTransform="capitalize"
            >
              {institution.name}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="GrayText">
              {institution.address}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="primary">
              {institution.phone}
            </Text>
            {breakpointValue === "base" && (
              <Box mt={4}>
                <Button
                  w={{ base: "full", sm: "70%" }}
                  // px={4}
                  h="26px"
                  fontSize="12px"
                  fontWeight="400"
                  bgColor="purpleTone"
                  color="white"
                >
                  More
                </Button>
              </Box>
            )}
          </Flex>
        </GridItem>
        {breakpointValue === "md" && (
          <GridItem colSpan={1}>
            <Flex w="full" h="full" justifyContent="center" alignItems="center">
              <Button
                px={4}
                h="26px"
                fontSize="12px"
                fontWeight="400"
                bgColor="purpleTone"
                color="white"
                _focus={{boxShadow: "none"}}
              >
                More
              </Button>
            </Flex>
          </GridItem>
        )}
      </SimpleGrid>
    </Fragment>
  );
};

export default InstitutionCard;
