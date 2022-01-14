import { Fragment, useState, useRef, useEffect } from "react";
import { Flex, Text, Divider, Image, Button } from "@chakra-ui/react";

const AvatarUpload:React.FC<{avatarUrl?, setAvatar}> = ({avatarUrl, setAvatar}) => {

  const avatarRef = useRef(null);
  const [avatarURL, setAvatarURL] = useState(null);
  useEffect(()=>{setAvatarURL(avatarUrl)}, [avatarUrl])

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setAvatar(i);
      setAvatarURL(URL.createObjectURL(i));
    }
  };

  return (
    <Fragment>
      <Flex
        flexDirection="column"
        bgColor="white"
        border="1px"
        borderRadius="8px"
        borderColor="gray.200"
        p={6}
      >
        <Text fontSize="12px" fontWeight="600">
          AVATAR
        </Text>
        <Divider my={6} />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={avatarURL ?? "/icons/upload-avatar.svg"}
            boxSize="80px"
            borderRadius="full"
            fit="cover"
            alt=""
            mt={8}
          />
          <input
            ref={avatarRef}
            type="file"
            hidden
            accept="image/*"
            onChange={uploadToClient}
          />
          <Button
            h="25px"
            bgColor="white"
            color="purpleTone"
            _hover={{bgColor: "white"}}
            fontSize="12px"
            fontWeight="400"
            border="1px"
            borderColor="gray.300"
            borderRadius="full"
            mt={8}
            onClick={() => avatarRef.current?.click()}
          >
            UPLOAD AVATAR
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default AvatarUpload;
