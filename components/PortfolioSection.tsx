import {
  AspectRatio,
  Box,
  ComponentDefaultProps,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import { RECENT_PROJECTS } from "../data/projects";
import { ProjectProps } from "../types";
import {
  GridLoadingAnimation,
  HoverAnimation,
  MovingLetters,
} from "./animations";
import { HtmlTag, PreviewImage } from "./ui";

const PortfolioSection = forwardRef<HTMLDivElement, ComponentDefaultProps>(
  ({ ...rest }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState<ProjectProps>();

    const previewProject = (project: ProjectProps) => {
      setSelectedProject(project);
      onOpen();
    };

    return (
      <>
        <Flex ref={ref} direction={"column"} {...rest}>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box flex={3}>
              <Box>
                <HtmlTag>h2</HtmlTag>
                <MovingLetters
                  mx={5}
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                  lineHeight={"normal"}
                  fontWeight={"bold"}
                  letterSpacing={"tight"}
                >
                  Recent work
                </MovingLetters>
                <HtmlTag>/h2</HtmlTag>
              </Box>

              <Box>
                <HtmlTag>p</HtmlTag>
                <Text
                  mx={5}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight={"medium"}
                >
                  We collaborated as a platform team to handle miniapps for the
                  other teams throughout the entire bank. Additionally, we have
                  created an ecosystem that includes JS tool libraries, app
                  generators, UI libraries for both React and React Native, etc.
                </Text>
                <HtmlTag>/p</HtmlTag>
              </Box>
            </Box>

            <Flex flex={1} />
          </Flex>

          <Box my={10}>
            <HtmlTag>section</HtmlTag>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }}>
              {RECENT_PROJECTS.map((project, index: number) => (
                <HoverAnimation key={index}>
                  <GridLoadingAnimation
                    delay={Math.random() * RECENT_PROJECTS.length * 50}
                    display={{
                      md: index === 9 ? "none" : "initial",
                      lg: "initial",
                    }}
                  >
                    <AspectRatio ratio={4 / 3} opacity={0}>
                      <Image
                        objectFit={"cover"}
                        src={project.thumbnailUrl}
                        alt={project.alt}
                        onClick={() => previewProject(project)}
                        cursor={"pointer"}
                        loading={"lazy"}
                      />
                    </AspectRatio>
                  </GridLoadingAnimation>
                </HoverAnimation>
              ))}
            </SimpleGrid>
            <HtmlTag>/section</HtmlTag>
          </Box>
        </Flex>

        {selectedProject && (
          <PreviewImage
            imageUrl={selectedProject.fullImageUrl}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </>
    );
  }
);
PortfolioSection.displayName = "Portfolio Section";

export { PortfolioSection };
