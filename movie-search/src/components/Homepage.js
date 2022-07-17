import { Box, Button, Image } from '@chakra-ui/react'
import { Input, InputGroup } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeMovie } from '../redux/stateSlice'

const Home = () => {
  const playlist = useSelector((state) => state.playlistReducer.playlist)
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  return (
    <>
      <Box>
        <Box mt={20} ml={40} mr={40}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter a movie name"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* <InputRightAddon children={} /> */}
            {searchValue.length > 0 && (
              <Link to={`/movies/?item=${searchValue}`}>
                <IconButton
                  aria-label="Search database"
                  icon={<SearchIcon w={7} h={7} />}
                />
              </Link>
            )}
          </InputGroup>
        </Box>
        <Box m={20} display="flex" flexWrap="wrap" gap={'20'}>
          {playlist.length > 0 ?
            (playlist.map((e, i) => {
              return (
                <Box>
                  <Box key={i} noOfLines={1}>
                    <Image src={e.pic} alt={e.name} height="300" width='200' />
                    <h1>{e.name}</h1>
                  </Box>
                  <Button
                    bg="red"
                    onClick={() => {
                      dispatch(removeMovie({ name: e.name }))
                    }}
                  >
                    Remove
                  </Button>
                </Box>
              )
            })): (<h1>Add Movies to Favourites</h1>)
          }
        </Box>
      </Box>
    </>
  )
}

export default Home
