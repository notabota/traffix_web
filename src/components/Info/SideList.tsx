import List from "@mui/joy/List";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Button from "@mui/joy/Button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Chip from "@mui/joy/Chip";
import * as React from "react";

export default function SideList() {
    return (
        <List
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 2,
            }}
        >
            <Sheet
                component="li"
                variant="outlined"
                sx={{
                    bgcolor: 'background.componentBg',
                    borderRadius: 'sm',
                    p: 2,
                    listStyle: 'none',
                }}
            >
                <Box sx={{display: 'flex', gap: 2}}>
                    <Avatar
                        src="https://cdn-icons-png.flaticon.com/512/4284/4284792.png"
                        sx={{borderRadius: 'sm'}}
                    />
                    <Box>
                        <Typography> Tắc nghẽn </Typography>
                        <Typography level="body3">Hôm qua lúc 14h22</Typography>
                    </Box>
                </Box>
                <ListDivider component="div" sx={{my: 1}}/>
                <Button
                    size="sm"
                    variant="plain"
                    sx={{px: 1}}
                >
                    Chi tiết
                </Button>
            </Sheet>
            <Sheet
                component="li"
                variant="outlined"
                sx={{
                    bgcolor: 'background.componentBg',
                    borderRadius: 'sm',
                    p: 2,
                    listStyle: 'none',
                }}
            >
                <Box sx={{display: 'flex', gap: 2}}>
                    <Avatar
                        src="https://cdn-icons-png.flaticon.com/512/4284/4284792.png"
                        sx={{borderRadius: 'sm'}}
                    />
                    <Box>
                        <Typography> Tai nạn </Typography>
                        <Typography level="body3">Hôm qua lúc 14h07</Typography>
                    </Box>
                </Box>
                <ListDivider component="div" sx={{my: 1}}/>
                <Button
                    size="sm"
                    variant="plain"
                    sx={{px: 1}}
                >
                    Chi tiết
                </Button>
            </Sheet>
        </List>
    );
};