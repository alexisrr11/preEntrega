import Item from "../item/item"

function ItemDetail ({item}) {
  return (
        <Item {...item} />
  )
}

export default ItemDetail