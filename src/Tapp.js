import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import InventoryIcon from '@mui/icons-material/Inventory';
import { styled } from '@mui/material/styles';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Props(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Tapp() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const [productList, setproductList] = useState([]);
    const [productTypenovel, setprodTypenovel] = useState([]);
    const [productTypecartoon, setprodcartoon] = useState([]);
    const [productTypedocumentay, setproddocumentay] = useState([]);
    const [productTypehistory, setprodhistory] = useState([]);
    const [productTypegeneral, setprodgeneral] = useState([]);


    useEffect(() => {
        getbookall()
        getnovel()
        getcartoon()
        getdoc()
        gethis()
        getgen()

    }, [])
    //All
    const getbookall = () => {
        fetch('https://plum-lively-trout.cyclic.app/app/book', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setproductList(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    //นิยาย
    const getnovel = () => {
        fetch('https://plum-lively-trout.cyclic.app/app/book/novel', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setprodTypenovel(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // การ์ตูน
    const getcartoon = () => {
        fetch('https://plum-lively-trout.cyclic.app/app/book/cartoon', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setprodcartoon(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // สารคดี
    const getdoc = () => {
        fetch('https://plum-lively-trout.cyclic.app/app/book/documentay', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setproddocumentay(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // ประวัติศาสตร์
    const gethis = () => {
        fetch('https://plum-lively-trout.cyclic.app/app/book/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setprodhistory(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // ความรู้ทั่วไป
    const getgen = () => {
        fetch('https://plum-lively-trout.cyclic.app/app/book/general', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                setprodgeneral(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const buy = async (id) => {
        fetch("https://plum-lively-trout.cyclic.app/cart/" + id,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    interface ExpandMoreProps extends IconButtonProps {
        expand: boolean;
    }

    const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState("");
    const handleExpandClick = (item) => {
        if (expanded === item.B_name) {
            setExpanded("");
        } else {
            setExpanded(item.B_name);
        }
    };


    return (

        <Container maxWidth="lg" sx={{ p: 2 }}>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
            ><Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', bgcolor: 'cream' }}
            >
                    <Tab label="ทั้งหมด" {...Props(0)} />
                    <Tab label="นิยาย" {...Props(1)} />
                    <Tab label="การ์ตูน" {...Props(2)} />
                    <Tab label="สารคดี" {...Props(3)} />
                    <Tab label="ประวัติศาสตร์" {...Props(4)} />
                    <Tab label="ความรู้ทั่วไป" {...Props(5)} />
                </Tabs>

                {/* All */}
                <Paper elevation={3} />
                <TabPanel value={value} index={0}>
                    <ImageList sx={{ width: 900, height: 850, maxWidth: "lg", pl: 15 }}>
                        {productList.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.B_Qty}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.BB_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.B_name}
                                    subtitle={item.B_Type}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </TabPanel>

                {/* novel */}
                <Paper elevation={3} />
                <TabPanel value={value} index={1}>
                    {productTypenovel.map((item) => (
                        <Container sx={{ pl: "center" }} >
                            <Card sx={{ maxWidth: 600, mt: 3, mb: 1 }} key={item.B_name}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <InventoryIcon onClick={() => {
                                                buy(item.c_id);
                                                alert(`You have purchased ${item.B_name}`);
                                            }} />
                                        </IconButton>
                                    }
                                    title={item.B_name}
                                    subheader={item.B_Price}
                                />
                                <CardMedia
                                    component="img"
                                    height="850"
                                    image={item.BB_img}
                                />
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded === item.B_name}
                                        onClick={() => handleExpandClick(item)}
                                        aria-expanded={expanded === item.B_name}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded === item.B_name} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>{item.B_detail}</Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Container>
                    ))}
                </TabPanel>

                {/*  cartoon */}
                <Paper elevation={3} />
                <TabPanel value={value} index={2}>
                    {productTypecartoon.map((item) => (
                        <Container sx={{ pl: "center" }} >
                            <Card sx={{ maxWidth: 600, mt: 3, mb: 1 }} key={item.B_name}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <InventoryIcon onClick={() => {
                                                buy(item.c_id);
                                                alert(`You have purchased ${item.B_name}`);
                                            }} />
                                        </IconButton>
                                    }
                                    title={item.B_name}
                                    subheader={item.B_Price}
                                />
                                <CardMedia
                                    component="img"
                                    height="850"
                                    image={item.BB_img}
                                />
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded === item.B_name}
                                        onClick={() => handleExpandClick(item)}
                                        aria-expanded={expanded === item.B_name}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded === item.B_name} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>{item.B_detail}</Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Container>
                    ))}
                </TabPanel>

                {/* documentay */}
                <Paper elevation={3} />
                <TabPanel value={value} index={3}>
                    {productTypedocumentay.map((item) => (
                        <Container sx={{ pl: "center" }} >
                            <Card sx={{ maxWidth: 600, mt: 3, mb: 1 }} key={item.B_name}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <InventoryIcon onClick={() => {
                                                buy(item.c_id);
                                                alert(`You have purchased ${item.B_name}`);
                                            }} />
                                        </IconButton>
                                    }
                                    title={item.B_name}
                                    subheader={item.B_Price}
                                />
                                <CardMedia
                                    component="img"
                                    height="850"
                                    image={item.BB_img}
                                />
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded === item.B_name}
                                        onClick={() => handleExpandClick(item)}
                                        aria-expanded={expanded === item.B_name}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded === item.B_name} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>{item.B_detail}</Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Container>
                    ))}
                </TabPanel>

                {/* history */}
                <Paper elevation={3} />
                <TabPanel value={value} index={4}>
                    {productTypehistory.map((item) => (
                        <Container sx={{ pl: "center" }} >
                            <Card sx={{ maxWidth: 600, mt: 3, mb: 1 }} key={item.B_name}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <InventoryIcon onClick={() => {
                                                buy(item.c_id);
                                                alert(`You have purchased ${item.B_name}`);
                                            }} />
                                        </IconButton>
                                    }
                                    title={item.B_name}
                                    subheader={item.B_Price}
                                />
                                <CardMedia
                                    component="img"
                                    height="850"
                                    image={item.BB_img}
                                />
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded === item.B_name}
                                        onClick={() => handleExpandClick(item)}
                                        aria-expanded={expanded === item.B_name}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded === item.B_name} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>{item.B_detail}</Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Container>
                    ))}
                </TabPanel>


                {/* general */}
                <Paper elevation={3} />
                <TabPanel value={value} index={5}>
                    {productTypegeneral.map((item) => (
                        <Container sx={{ pl: "center" }} >
                            <Card sx={{ maxWidth: 600, mt: 3, mb: 1 }} key={item.B_name}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <InventoryIcon onClick={() => {
                                                buy(item.c_id);
                                                alert(`You have purchased ${item.B_name}`);
                                            }} />
                                        </IconButton>
                                    }
                                    title={item.B_name}
                                    subheader={item.B_Price}
                                />
                                <CardMedia
                                    component="img"
                                    height="850"
                                    image={item.BB_img}
                                />
                                <CardActions disableSpacing>
                                    <ExpandMore
                                        expand={expanded === item.B_name}
                                        onClick={() => handleExpandClick(item)}
                                        aria-expanded={expanded === item.B_name}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded === item.B_name} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>{item.B_detail}</Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Container>
                    ))}
                </TabPanel>
            </Box>
        </Container >
    );
}

