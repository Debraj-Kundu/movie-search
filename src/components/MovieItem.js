import { Box, Image, GridItem, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addMovie } from '../redux/stateSlice'

const Movieitem = ({ title, img, i }) => {
  const dispatch = useDispatch()

  return (
    <GridItem style={{ cursor: 'pointer', minHeight: '80px' }} w="100%">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        shadow="2xl"
        key={i}
        bg="gray.700"
      >
        <Link to={`/desc/?title=${title}`}>
          <Image src={img} alt={title} height={400} />
        </Link>

        <Box p="6" bg="gray.700">
          <Link to={`/desc/?title=${title}`}>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              bg="gray.700"
            >
              <Text align="center">{title}</Text>
            </Box>
          </Link>
          <br />
          <Button bg='green'
            onClick={() => {
              dispatch(
                addMovie({
                  id: i,
                  pic: img,
                  name: title,
                }),
              )
            }}
          >
            Add to Playlist
          </Button>
        </Box>
      </Box>
    </GridItem>
  )
}

export default Movieitem
