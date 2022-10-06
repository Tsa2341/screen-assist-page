import {
  Box,
  Button,
  Icon,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RefreshIcon from '@material-ui/icons/Refresh';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import clsx from 'clsx';
import React from 'react';
import CustomIconButton from './CustomIconButton';
import ChildDropDownItem from './dropdown/ChildDropDownItem';
import ParentDropDownItem from './dropdown/ParentDropDownItem';
import ItemLabel from './ItemLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  innerBox1: {
    display: 'flex',
    flexFlow: 'row wrap',
    gap: theme.spacing(2),
    padding: theme.spacing(1.5),
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  innerBox1Element: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  icon: {
    fontSize: '1rem',
    fill: theme.palette.secondary.main,
  },
  innerBox2: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '100%',
    overflowY: 'auto',
  },
  innerBox2DropDownSection: {
    width: '30%',
    height: '100%',
    minWidth: '200px',
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    alignItems: 'stretch',
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: theme.spacing(1),
    padding: `${theme.spacing(2)}px 0`,
  },
  innerBox2TableSection: {
    overflow: 'auto',
    height: '100%',
    flexGrow: 1,
  },
  innerBox2Button: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'start',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    textAlign: 'left',
  },
  dropDownBox: {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    overflowY: 'auto',
    '& > *': {
      padding: `0   ${theme.spacing(2)}px`,
    },
  },
  dropDownItem: {
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: theme.spacing(1),
    alignItems: 'center',
  },
  table: {
    width: '100%',
    height: '100%',
  },
  tableHeaderItem1: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: theme.spacing(1),
    '& > *:last-child': {
      marginLeft: 'auto',
    },
  },
  tableHeadCellText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tableSmallCell: {
    borderLeft: `0.5px solid ${theme.palette.secondary.main}`,
    borderCollapse: 'collapse',
    padding: theme.spacing(1.5),
  },
}));

const Item = ({ name, className, ...props }) => {
  const classes = useStyles();

  return (
    <ChildDropDownItem>
      <Box className={clsx(classes.dropDownItem, className)} {...props}>
        <RemoveRedEyeOutlinedIcon className={classes.icon} />
        <Typography>{name}</Typography>
      </Box>
    </ChildDropDownItem>
  );
};
const TableBodyCell = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <TableCell className={classes.tableSmallCell} {...props}>
      <Typography>{children}</Typography>
    </TableCell>
  );
};
const TableHeadCell = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <TableCell className={classes.tableSmallCell}>
      <Typography className={classes.tableHeadCellText}>{children}</Typography>
    </TableCell>
  );
};

function MainLowerSection() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.innerBox1}>
        <Box className={classes.innerBox1Element}>
          <Icon>
            <RadioButtonCheckedIcon />
          </Icon>
          <Typography color="secondary">Query results</Typography>
        </Box>
        <Box className={classes.innerBox1Element}>
          <Icon>
            <RadioButtonCheckedIcon />
          </Icon>
          <Typography color="secondary">Schemas</Typography>
        </Box>
      </Box>

      <Box className={classes.innerBox2}>
        <Box className={classes.innerBox2DropDownSection}>
          <Button className={classes.innerBox2Button}>
            <Typography>Refresh</Typography>
            <Icon>
              <RefreshIcon />
            </Icon>
          </Button>
          <Box className={classes.dropDownBox}>
            <ParentDropDownItem name="datafrom_demo">
              <Item name="dataset_1" />
              <Item name="dataset_5_from_script_builder" />
              <Item name="dataset_3_incremental_date" />
              <Item name="dataset_4_incremental_snapshot" />
              <Item name="repoting_gb" />
            </ParentDropDownItem>
            <ParentDropDownItem name="datafrom_set2">
              <Item name="dataset_1" />
              <Item name="dataset_5_from_script_builder" />
              <Item name="dataset_3_incremental_date" />
              <Item name="dataset_4_incremental_snapshot" />
              <Item name="repoting_gb" />
            </ParentDropDownItem>
          </Box>
        </Box>

        <Box className={classes.innerBox2TableSection}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <Box className={classes.tableHeaderItem1}>
                    <ItemLabel>view</ItemLabel>
                    <Typography>dataform_demo.dataset_1</Typography>
                    <CustomIconButton>
                      <CloseIcon color="secondary" />
                    </CustomIconButton>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeadCell>Field</TableHeadCell>
                <TableHeadCell>Type</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableBodyCell>date</TableBodyCell>
                <TableBodyCell>date</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>device_type</TableBodyCell>
                <TableBodyCell>character varying</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>country</TableBodyCell>
                <TableBodyCell>character varying</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>session</TableBodyCell>
                <TableBodyCell>integer</TableBodyCell>
              </TableRow>
              <TableRow>
                <TableBodyCell>revenue</TableBodyCell>
                <TableBodyCell>integer</TableBodyCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLowerSection;
