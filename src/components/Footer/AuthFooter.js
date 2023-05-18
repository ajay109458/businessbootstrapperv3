/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      
        
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://www.simmmple.com'>
            {document.documentElement.dir === "rtl"
              ? "توقيت الإبداعية"
              : "Simmmple"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://www.creative-tim.com'>
            {document.documentElement.dir === "rtl" ? "سيممبل" : "Creative Tim"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link
            color='white'
            fontSize='sm'
            href='#blog'
            href='https://creative-tim.com/blog'>
            {document.documentElement.dir === "rtl" ? "مدونة" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color='white'
            href='#license'
            href='https://www.creative-tim.com/license'>
            {document.documentElement.dir === "rtl" ? "رخصة" : "License"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
