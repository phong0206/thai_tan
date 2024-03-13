import React, { ChangeEvent } from 'react';
import Select from '../components/PostBlog/Select';
import '../App.css';
import InputFileUpload from '../components/PostBlog/InputFileUpload';
import * as api from '../apis/api';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { makeStyles, createStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    box: {
      fontFamily: 'Times New Roman',
      marginTop: '1.5%',
      display: 'flex',
      flexDirection: 'column',
      padding: '30px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      width: '75%',
      marginInline: 'auto',
      [theme.breakpoints.down('lg')]: {
        width: '65%',
        marginTop: 50,
      },
      [theme.breakpoints.down('md')]: {
        width: '65%',
        marginTop: 40,
      },
      [theme.breakpoints.down('sm')]: {
        width: '85%',
        marginTop: 50,
      },
      '& > *:not(:last-child)': {
        marginBottom: '10px',
      },
    },
    h2: {
      marginTop: '20px',
    },
    sendAPI: {
      fontWeight: 'bold',
      marginInline: 'auto',
      padding: '6px 16px !important',
      '&:hover': {
        backgroundColor: '#032887 !important',
      },
    },
    content: {
      maxHeight: '300px',
      overflowY: 'auto',
    },
  })
);

const Post = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [repoCategories, setRepoCategories] = React.useState([]);
  const [repoUnits, setRepoUnits] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    const fetchUnitsByCategory = async () => {
      try {
        const data = await api.getAllCategories();
        if (data.status === 200) {
          setRepoCategories(data.data.data.categories);
        } else {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching units by category', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUnitsByCategory();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChangeCategory = async (
    event: ChangeEvent<{ value: unknown }>
  ) => {
    const selectedCategoryId = event.target.value as string;
    setCategory(selectedCategoryId);

    try {
      setIsLoading(true);
      const data = await api.getUnitsByCategoryId(selectedCategoryId);
      if (data.status === 200) {
        setRepoUnits(data.data.units);
      }
    } catch (error) {
      console.error('Error fetching units by category', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeUnit = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedUnitId = event.target.value as string;
    setUnit(selectedUnitId);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      
    }, 3000);
    setContent(event.target.value);
  };

  const uploadBlog = async () => {
    if (!category || !unit || !file || !title || !content) {
      console.error('Missing required information');
      return;
    }

    try {
      const data = await api.uploadBlog({ file, content, title, unit });
      console.log(123123123,data)
      if (data.status === 200) {
        enqueueSnackbar(data.message, {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      } else {
        enqueueSnackbar(data.message, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } catch (error) {
      console.error('Error uploading blog', error);
    }
  };

  return (
    <>
      <h2 className={classes.h2}>Post Blog</h2>
      <Box className={classes.box}>
        <Select
          nameSelect="Category"
          value={category}
          handleChange={handleChangeCategory}
          repo={repoCategories}
          displayField="category"
          valueField="_id"
        />
        <Select
          nameSelect="Unit"
          value={unit}
          handleChange={handleChangeUnit}
          repo={repoUnits}
          displayField="unit"
          valueField="_id"
        />
        <TextField
          value={title}
          onChange={handleTitleChange}
          label="Title"
          variant="outlined"
          fullWidth
        />
        <InputFileUpload handleFileChange={handleFileChange} />
        <TextField
          value={content}
          onChange={handleContentChange}
          className={classes.content}
          label="Content"
          multiline
          variant="outlined"
          fullWidth
          InputLabelProps={{
            style: { lineHeight: '2.28' },
          }}
        />
        <Button
          className={classes.sendAPI}
          variant="contained"
          onClick={uploadBlog}
        >
          Upload Blog
        </Button>
      </Box>
    </>
  );
};

export default Post;
