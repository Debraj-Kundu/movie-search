import { createSlice } from '@reduxjs/toolkit'
import playlist from './playlists'

export const counterSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: playlist,
  },
  reducers: {
    addMovie: (state, action) => {
        let temp = {
          id: action.payload.id,
          pic: action.payload.pic,
          name: action.payload.name,
        }
        state.playlist = [...state.playlist, temp]
      },
      removeMovie: (state, action) => {
        let temp = state.playlist
        let idx=-1
        for(let i=0; i<temp.length; i++){
          if(temp[i].name === action.payload.name){
            idx = i
          }
        }
        temp.splice(idx, 1)
        state.playlist = [...temp]
      }
  },
})

// Action creators are generated for each case reducer function
export const { addMovie, removeMovie } = counterSlice.actions

export default counterSlice.reducer