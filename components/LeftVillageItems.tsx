import { useRouter } from "next/router";
import Link from "next/link";
import {
  HStack,
  VStack,
  Divider,
  Box,
  Image,
  Text,
  Badge,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { MyThunkDispatch, OurStore } from "rdx/store";

import UseVillageStats from "hooks/use-village-stats";

const villageItems = [
  {
    id: 0,
    name: "My Page",
    value: "users",
    img: "/icons/village-mypage.svg",
    path: '/village/users',
    activeBgColor: '#EFFBFA',
    badgeColor: '#36CFD1'
  },
  {
    id: 1,
    name: "Graduates",
    value: "graduates",
    img: "/icons/village-graduate.svg",
    path: '/graduates',
    activeBgColor: '#AD5BFF',
    badgeColor: '#BF5AFF'
  },
  {
    id: 2,
    name: "Society",
    value: "articles",
    img: "/icons/village-society.svg",
    path: '/village/society',
    activeBgColor: '#F4F4FB',
    badgeColor: '#BBBBD7'
  },
  {
    id: 3,
    name: "Personalities",
    value: "users",
    img: "/icons/village-personality.svg",
    path: '/village/personalities',
    activeBgColor: '#FFF9E8',
    badgeColor: '#FFB425'
  },
  {
    id: 4,
    name: "Institutions",
    value: "institutions",
    img: "/icons/village-institution.svg",
    path: '/village/institutions',
    activeBgColor: '#5B8FFF22',
    badgeColor: '#5A8FFF'
  },
  {
    id: 5,
    name: "Videos",
    value: "videos",
    img: "/icons/village-video.svg",
    path: '/village/videos',
    activeBgColor: '#FF5B5B22',
    badgeColor: '#FF645A'
  },
];

const LeftVillageItems: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const breakpointValue = useBreakpointValue({ base: "base", md: "md" });

  const { villageStats } = UseVillageStats("jammura");
  
  return (
    <VStack
      spacing={1}
      divider={breakpointValue === "base" ? <Divider /> : null}
    >
      {villageItems.map((item) => (
        <Link key={item.name} href={item.path}>
          <HStack
            w="full"
            h={{ base: "60px", md: "40px" }}
            spacing={4}
            bgColor={
              item.path === pathname ? item.activeBgColor : "transparent"
            }
            borderRadius="8px"
            px={2}
            cursor="pointer"
            _hover={{
              bgColor: "gray.100",
            }}
          >
            <Image
              src={item.img}
              alt=""
              w={{ base: "50px", md: "30px" }}
              h={{ base: "50px", md: "30px" }}
            />
            <Text w="full" fontSize="13px">
              {item.name}
            </Text>

            <Badge
              bgColor={item.path === pathname ? item.badgeColor : "#FBFBFA"}
              color={item.path === pathname ? "white" : ""}
              fontSize="11px"
              fontWeight="400"
              lineHeight={2}
              px={2}
              minW={8}
              h={5}
              borderRadius="xl"
            >
              <Center>{villageStats[item.value]}</Center>
            </Badge>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
};

export default LeftVillageItems;
