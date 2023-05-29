import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
  Flex,
  Button,
} from "@chakra-ui/react";
import style from "./EjercicioCard.module.css";

export function EjercicioCard({isOpen,ejercicios,onClick,ejer}) {

  const {id,name,muscle,difficulty,instructions} = ejercicios;

  const isIn = ejer.find(item => item.id === id)

  return (
    <div key={id}>
      <Card className={style.card} bg="blackAlpha.700">
        <CardHeader>
          <Flex justifyContent='space-between'>
          <Heading className={style.title} size="xl">
            {name}
          </Heading>
            {isOpen ? 
                isIn ? 
                      <Button
                        onClick={() => onClick(ejercicios)}
                        bg={'red.500'}
                      >Remove</Button>: 
                      <Button
                        bg={'blue.500'}
                        onClick={() => onClick(ejercicios)}
                      > Add </Button> : <></>
            }
          </Flex>
        </CardHeader>
        <CardBody >
          <Stack divider={<StackDivider />} spacing="4">
            <Flex 
              justifyContent={'space-around'}
            >
            <Box
              justifyContent={"center"}
            >
              <Heading
                className={style.title}
                size="md"
                textTransform="uppercase"
              >
                Difficulty
              </Heading>
              <Text
                color="white"
                textTransform="uppercase"
                pt="2"
                fontSize="sm"
              >
                {difficulty}
              </Text>
            </Box>
            <Box
              justifyContent={"center"}
            >
              <Heading
                className={style.title}
                size="md"
                textTransform="uppercase"
              >
                Muscle
              </Heading>
              <Text
                color="white"
                textTransform="uppercase"
                pt="2"
                fontSize="sm"
              >
                {muscle}
              </Text>
            </Box>
            </Flex>
            <Box>
              <Heading
                className={style.title}
                size="s"
                textTransform="uppercase"
              >
                Instructions
              </Heading>
              <textarea className={style.textarea} disabled={true}>{instructions}</textarea>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default EjercicioCard;
