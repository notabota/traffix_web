import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

// Icons import
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ReportIcon from '@mui/icons-material/Report';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

// Router
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <List size="sm" sx={{'--List-item-radius': '8px'}}>
            <ListItem nested sx={{p: 0}}>
                <Box
                    sx={{
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        id="nav-list-browse"
                        textColor="neutral.500"
                        fontWeight={700}
                        sx={{
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                        }}
                    >
                        Pages
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{'--IconButton-size': '24px'}}
                    >
                        <KeyboardArrowDownRoundedIcon fontSize="small" color="primary"/>
                    </IconButton>
                </Box>
                <List
                    aria-labelledby="nav-list-browse"
                    sx={{
                        '& .JoyListItemButton-root': {p: '8px'},
                    }}
                >
                    <Link to="/map/detail" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton variant="soft" color="primary">
                                <ListItemDecorator sx={{color: 'inherit'}}>
                                    <FolderOpenIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>
                                    Homepage
                                </ListItemContent>

                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/map/chart" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{color: 'neutral.500'}}>
                                    <StackedLineChartIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>Data</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>
            </ListItem>
        </List>
    );
}
