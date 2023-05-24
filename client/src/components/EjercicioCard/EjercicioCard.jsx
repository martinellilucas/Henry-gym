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

export function EjercicioCard({isOpen,ejercicios,onClick}) {

  const {id,name,muscle,difficulty,instructions} = ejercicios;



  return (
    <div key={id}>
      <Card className={style.card} bg="blackAlpha.700">
        <CardHeader>
          <Flex justifyContent='space-between'>
          <Heading className={style.title} size="xl">
            {name}
          </Heading>
            {isOpen ? 
              <Button
               onClick={(e) => onClick(e,id)}
              >
                Add
              </Button> : <></>
            }
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                className={style.title}
                size="s"
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
            <Box>
              <Heading
                className={style.title}
                size="s"
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
