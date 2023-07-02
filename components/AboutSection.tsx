import {
  Box,
  ComponentDefaultProps,
  Flex,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { forwardRef, useEffect, useRef } from "react";
//@ts-ignore
import TagCloud from "TagCloud";
import { MovingLetters } from "./animations";
import { HtmlTag } from "./ui";

const texts = [
  "HTML",
  "CSS",
  "ES6",
  "TypeScript",
  "JSON",
  "Image Processing",
  "Data Science",
  "C/C++",
  "Python",
  "Numpy",
  "Pandas",
  "Pytorch",
  "NodeJS",
  "Git",
  "Bootstrap",
  "Material UI",
  "ReactJS",
  "React Native",
  "GraphQL",
  "NextJS",
  "DL",
  "ML",
  "SQl",
  "MongoDB",
  "npm",
  "yarn",
  "AWS",
];

const AboutSection = forwardRef<HTMLDivElement, ComponentDefaultProps>(
  ({ ...rest }, ref) => {
    const cloudRef = useRef<HTMLDivElement>(null);
    const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");

    useEffect(() => {
      const tagCloud = TagCloud(cloudRef.current, texts, {
        radius: isLargerThanLg ? 200 : 160,
        direction: 45,
      });

      return () => tagCloud.destroy();
    }, [cloudRef, isLargerThanLg]);

    return (
      <Flex
        ref={ref}
        justifyItems={"center"}
        direction={{ base: "column", md: "row" }}
        {...rest}
      >
        <Flex direction={"column"} flex={1}>
          <Box>
            <HtmlTag>h2</HtmlTag>
            <MovingLetters
              mx={5}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              lineHeight={"normal"}
              fontWeight={"bold"}
              letterSpacing={"tight"}
            >
              About me
            </MovingLetters>
            <HtmlTag>/h2</HtmlTag>
          </Box>

          <Box>
            <HtmlTag>p</HtmlTag>
            <Box mx={5}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight={"medium"}
                mb={5}
              >
                We&#39;re here to serve customers well and help our communities
                prosper.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight={"medium"}
                mb={5}
              >
                We&#39;re more than 32,000 colleagues, supporting more than
                eight and a half million customers in Australia and overseas
                across: personal accounts, small, medium and large businesses,
                private clients, government and institutional activities.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight={"medium"}>
                We became NAB when the National Bank of Australasia (est. 1858)
                merged with the Commercial Banking Company of Sydney (est. 1834)
                on October 1, 1981.
              </Text>
            </Box>
            <HtmlTag>/p</HtmlTag>
          </Box>
        </Flex>

        <Flex flex={1}>
          <Flex
            ref={cloudRef}
            w={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            color={useColorModeValue("", "yellow.200")}
            zIndex={1}
          />
        </Flex>
      </Flex>
    );
  }
);
AboutSection.displayName = "About Section";

export { AboutSection };
