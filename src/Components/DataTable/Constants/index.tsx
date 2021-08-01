import { MUIDataTableColumn } from 'mui-datatables'
import { Avatar } from '@material-ui/core'

export const columns: MUIDataTableColumn[] = [
  {
    name: "id",
    label: "ID"
  },
  {
    name: "thumbnailUrl",
    label: "Thumb",
    options: {
      customBodyRender: (url: string) => (
        <Avatar alt="Avatar" src={url} />
      )
    }
  },
  {
    name: "title",
    label: "Title",
  },
];
