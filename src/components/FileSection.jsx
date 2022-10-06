import { Box, makeStyles, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import clsx from 'clsx';
import React from 'react';
import ChildDropDownItem from './dropdown/ChildDropDownItem';
import ParentDropDownItem from './dropdown/ParentDropDownItem';
import ItemLabel from './ItemLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    minWidth: '200px',
    width: '20vw',
    height: '100%',
    background: 'var(--gray-default)',
    '& > *': {
      display: 'flex',
      flexFlow: 'column nowrap',
    },
  },
  header: {
    color: 'white',
  },
  fileBox: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    width: 'max-content',
    overflowY: 'auto',
  },
  folderSection: {
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingTop: theme.spacing(1),
  },
  folderNameBox: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));

const File = ({ label, name, ...props }) => {
  const classes = useStyles();

  return (
    <Box className={classes.fileBox} {...props}>
      <ItemLabel>{label}</ItemLabel>
      <Typography>{name}</Typography>
    </Box>
  );
};
const Folder = ({ name, ...props }) => {
  const classes = useStyles();

  return (
    <ParentDropDownItem
      name={
        <Box className={classes.folderNameBox}>
          <FolderIcon />
          <Typography>{name}</Typography>
        </Box>
      }
      {...props}
    />
  );
};

function FileSection({ className, ...props }) {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <Typography variant="h5" className={classes.header}>
        Files
      </Typography>

      <Box>
        <File label="config" name="dataform"></File>
        <File label="config" name="package-lock"></File>
        <File label="config" name="package"></File>
      </Box>

      <Box className={classes.folderSection}>
        <Folder name="models">
          <Folder name="1_simple_examples">
            <ChildDropDownItem>
              <File label="SQL" name="dataset_1"></File>
            </ChildDropDownItem>
            <ChildDropDownItem>
              <File label="SQL" name="dataset_2_with_ref"></File>
            </ChildDropDownItem>
          </Folder>

          <Folder name="2_advanced_examples">
            <ChildDropDownItem>
              <File label="SQL" name="dataset_3_increases_continuation"></File>
            </ChildDropDownItem>
            <ChildDropDownItem>
              <File label="JS" name="dataset_4_increases_continuation"></File>
            </ChildDropDownItem>
          </Folder>

          <Folder name="3_operations_and_assestions_mybe_with_continuation">
            <ChildDropDownItem>
              <File label="ops" name="grant_access"></File>
            </ChildDropDownItem>
            <ChildDropDownItem>
              <File label="assert" name="simple_assertions"></File>
            </ChildDropDownItem>
          </Folder>
        </Folder>
        <Folder name="models_2" />
      </Box>
    </Box>
  );
}

export default FileSection;
