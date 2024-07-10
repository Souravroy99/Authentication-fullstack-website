import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-ul-list-container">
        {
            list && list.length
            ? list.map((ListItem) => <MenuItem key={ListItem.label} Item={ListItem} />)
            : null
        }
    </ul>
  );
}
