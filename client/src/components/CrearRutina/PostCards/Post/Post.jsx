import {
    Card,
    CardHeader,
    CardBody,
    Box,
    Heading,
    Text,
    Flex,
    Button,
  } from "@chakra-ui/react";
  import style from "./Post.module.css";
  
  export default function Post ({ejercicios,form,setForm}) {
  
    const {id,name,muscle,difficulty} = ejercicios;

    const onRemove = (ejercicios) => {  
      console.log(ejercicios);
      setForm({...form,
        ejercicios : form.ejercicios.filter((item) => item.id !== ejercicios.id)})
         }

    return (
      <div key={id}>
        <Card className={style.card} bg="blackAlpha.700" height={'100%'}>
          <CardHeader 
            size={'sm'}
          >
            <Flex justifyContent='space-between'>
            <Heading className={style.title} size="sm" marginRight={'3%'}>
              {name}
            </Heading>
            <Button
              marginLeft={'3%'}
              size={'sm'}
              onClick={()=>{
                onRemove(ejercicios)
              }}
              bg={'red.500'}
              color={"whiteAlpha.800"}
            >
              Remove
            </Button>
            </Flex>
          </CardHeader>
          <CardBody >
              <Flex 
                justifyContent={'space-between'}
              >
              <Box
                justifyContent={"center"}
              >
                <Heading
                  className={style.title}
                  size={'sm'}
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
                  size="sm"
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
          </CardBody>
        </Card>
      </div>
    );
  }
  

  