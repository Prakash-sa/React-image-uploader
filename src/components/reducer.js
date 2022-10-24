export const initialState = {
    images: []
  };

  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_IMAGE":
            return {
                ...state,
                images: [...state.images, action.item.images],
            };
        case "REMOVE_IMAGE":
            const imageIndex = state.images[0].findIndex(e => e.name === action.name);
            console.log("index",imageIndex);

            state.images[0].map((im)=>{
                console.log(im.name)
            })

            console.log("state image",state.images[0])
            let newImages = [...state.images];
            if (imageIndex >= 0) {
                newImages[0].splice(imageIndex, 1);
    
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in image!`
                )
            }
            return {
                ...state,
                images: newImages
            }
  
        default:
            return state;
    }
  };
  
  export default reducer;