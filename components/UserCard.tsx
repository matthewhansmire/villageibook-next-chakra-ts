import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  HStack,
  VStack,
  Divider,
  Flex,
  Box,
  Image,
  Text,
  Badge,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import type { User } from "types/schema";

const UserCard: React.FC<{ user: User }> = ({
  user,
}) => {
  const router = useRouter();
  const { pathname } = router;

  const breakpointValue = useBreakpointValue({ base: "base", md: "md" });

  return (
    <Fragment>
      {breakpointValue === "md" && (
        <HStack w="full" border="1px" borderColor="gray.200" borderRadius="md">
          <Box pos="relative" minW="max-content">
            <Image
              src={user.avatar??"/images/default-user.png"}
              boxSize="135px"
              alt=""
              fit="cover"
            />
            {user?.roles?.includes("PREMIUM") && (
              <Box pos="absolute" top={2} left={2}>
                <Badge
                  fontSize="9px"
                  fontWeight="400"
                  opacity={0.8}
                  borderRadius="full"
                  px={2}
                >
                  PREMIUM
                </Badge>
              </Box>
            )}
          </Box>
          <Box w="full" p={4}>
            <Text
              fontSize="12px"
              fontWeight="400"
              color="GrayText"
              textTransform="capitalize"
            >
              {user.comesFrom?.name}
            </Text>
            <Text fontSize="18px" color="primary" textTransform="capitalize">
              {user.firstName} {user.lastName}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="GrayText" mt={2}>
              {user.about}
            </Text>
          </Box>
          <Box px={4}>
            <Link href={`/userview/${user.uuid}`} passHref={true}>
              <Button
                px={4}
                h="26px"
                fontSize="12px"
                fontWeight="400"
              >
                View Profile
              </Button>
            </Link>
          </Box>
        </HStack>
      )}

      {breakpointValue === "base" && (
        <VStack
          pos="relative"
          w="full"
          spacing={4}
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={4}
        >
          <HStack w="full" pos="relative" spacing={2}>
            <Image
              src={user.avatar}
              boxSize="44px"
              alt=""
              fit="cover"
              borderRadius="full"
            />
            {user?.roles?.includes("PREMIUM") && (
              <Flex
                w="full"
                pos="absolute"
                top={0}
                right={0}
                justifyContent="flex-end"
              >
                <Badge
                  fontSize="8px"
                  fontWeight="400"
                  borderRadius="full"
                  px={2}
                >
                  PREMIUM
                </Badge>
              </Flex>
            )}
            <Box>
              <Text fontSize="10px" color="GrayText">
                {user.comesFrom?.name}
              </Text>
              <Text fontSize="13px" fontWeight="600" color="primary">
                {user.firstName} {user.lastName}
              </Text>
            </Box>
          </HStack>
          <Text fontSize="11px" color="GrayText">
            {user.about}
          </Text>
          <Box h="42px"></Box>

          <Link href={`/userview/${user.uuid}`} passHref={true}>
            <Button
              pos="absolute"
              bottom={4}
              w={{ base: "full", sm: "auto" }}
              h={8}
              fontSize="12px"
              fontWeight="400"
              bgColor="greenTone"
            >
              View Profile
            </Button>
          </Link>
        </VStack>
      )}
    </Fragment>
  );
};

export default UserCard;
