import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  VStack,
  Center,
  Icon,
  Image,
  Avatar,
  Text,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaWallet, FaGlobe, FaFile, FaShoppingCart, FaRegArrowAltCircleRight, FaRocket, FaThList } from "react-icons/fa";
import { useTable, useSortBy } from 'react-table';

import Layout from "admin/components/Layout";
import ImageBox from "components/widgets/ImageBox";
import VideoBox from "components/widgets/VideoBox";

import { getUserToken } from "helpers/user-token";
import useAdminFetchData from "hooks/use-admin-fetch-data";
import useActionDispatch from "hooks/use-action-dispatch";

const Posts: NextPage = () => {
  const router = useRouter();
  const { me, posts, fetchCommonData, fetchMeData, fetchPostsData } = useAdminFetchData();

  useEffect(() => {
    const access_token = getUserToken();
    if (access_token) {
      fetchMeData();
    } else {
      router.push("/home");
    }
  }, []);

  useEffect(() => {
    // if(me.role !== "admin"){
    //   router.push("/feed");
    // }
    fetchPostsData();
  }, [me]);

  const columns = useMemo(
    () => [
      {
        Header: 'Content',
        accessor: 'content',
      },
      {
        Header: 'Picture',
        accessor: 'picture',
        Cell: function PictureItem({ row }) {
          return (
            <Box w={40}>
              <ImageBox
                imageUrl={row.original.picture}
              />
            </Box>
          );
        },
      },
      {
        Header: 'Video',
        accessor: 'video',
        Cell: function VideoItem({ row }) {
          return (
            <Box w={40}>
              <VideoBox videoUrl={row.original.video} />
            </Box>
          )
        }
      },
      {
        Header: 'User',
        accessor: 'user',
        Cell: function UserItem({row}){
          return(
            <VStack>
              <Avatar src={row.original.user.avatar} size="sm" />
              <Text>{row.original.user.firstName} {row.original.user.lastName}</Text>
            </VStack>
          )
        }
      },
      // {
      //   Header: 'Action',
      //   accessor: 'action',
      //   Cell: function ActionItem({ row }){
      //     return (
      //       <HStack>
      //         <Button onClick={()=>console.log(row)}>Edit</Button>
      //         <Button onClick={()=>console.log(row)}>Delete</Button>
      //       </HStack>
      //     )
      //   }
      // }
    ], 
    []
  )

  const [data, setData] = useState([])
  const tableInstance = useTable({ columns, data })
  useEffect(() => {
    setData(posts.map(post => (
      {
        uuid: post.uuid,
        content: post.content,
        picture: post.picture,
        video: post.video,
        user: post.user
      }
    )))
  }, [posts])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <Fragment>
      <Layout>
        <Table {...getTableProps()}>
          <Thead>
            {// Loop over the header rows
              headerGroups.map((headerGroup, index) => (
                // Apply the header row props
                <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {// Loop over the headers in each row
                    headerGroup.headers.map((column, iindex) => (
                      // Apply the header cell props
                      <Th key={iindex} {...column.getHeaderProps()}>
                        {// Render the header
                          column.render('Header')}
                      </Th>
                    ))}
                </Tr>
              ))}
          </Thead>
          {/* Apply the table body props */}
          <Tbody {...getTableBodyProps()}>
            {// Loop over the table rows
              rows.map((row, index) => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  // Apply the row props
                  <Tr key={index} {...row.getRowProps()}>
                    {// Loop over the rows cells
                      row.cells.map((cell, iindex) => {
                        // Apply the cell props
                        return (
                          <Td key={iindex} {...cell.getCellProps()}>
                            {// Render the cell contents
                              cell.render('Cell')}
                          </Td>
                        )
                      })}
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
      </Layout>
    </Fragment>
  );
};

export default Posts;
