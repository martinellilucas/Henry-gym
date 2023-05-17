import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Text,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import style from "./EjercicioCard.module.css";

export function EjercicioCard(e) {
  return (
    <div key={e.id}>
      <Card className={style.card} bg="blackAlpha.700">
        <CardHeader>
          <Heading className={style.title} size="xl">
            {e.name}
          </Heading>
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
                {e.difficulty}
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
                {e.muscle}
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
              <textarea className={style.textarea}>{e.instructions}</textarea>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default EjercicioCard;
