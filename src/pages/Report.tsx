import * as React from 'react';
import {sliderUnstyledClasses} from '@mui/base/SliderUnstyled';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Textarea from '@mui/joy/Textarea'
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import ListDivider from '@mui/joy/ListDivider';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import {addDoc, collection, doc, FieldValue, setDoc} from "firebase/firestore";

// Icons import
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import Slider from '../components/App/Slider';
import {ChangeEvent, useState} from "react";
import {Firestore} from "@firebase/firestore";


interface DatabaseProps {
    db: Firestore
}

export default function Report({db}: DatabaseProps) {

    const [title, setTitle] = useState('');
    const handleTitleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
    };
    const [summary, setSummary] = useState('');
    const handleSummaryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSummary(event.target.value);
    };
    const [content, setContent] = useState('');
    const handleContentChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setContent(event.target.value);
    };
    const [type, setType] = useState<string>('else');
    const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
        console.log(event)
    };

    async function sendReport() {
        alert('Gửi báo cáo thành công')
        const docRef = await addDoc(collection(db, "notifications"), {
            content: content,
            title: title,
            level: type,
            timestamp: new Date(),
            summary: {
                en: summary,
            }
        });
        console.log("Document written with ID: ", docRef.id);
    }


    return <>
        <Box
            sx={{
                p: 2,
                pb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                fontSize="xs2"
                textColor="text.tertiary"
                textTransform="uppercase"
                letterSpacing="md"
                fontWeight="lg"
            >
                Reporting
            </Typography>
            <Button size="sm" variant="plain" sx={{fontSize: 'xs', px: 1}}>
                Clear
            </Button>
        </Box>
        <Box sx={{p: 2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="body2" textColor="text.primary">
                    Title
                </Typography>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="primary"
                    sx={{'--IconButton-size': '24px'}}
                >
                    <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
                </IconButton>
            </Box>
            <Box sx={{mt: 2}}>
                <TextField placeholder="Title of your report"
                           value={title}
                           onChange={handleTitleChange}/>
                {/*<Box sx={{mt: 2, display: 'flex', gap: 1}}>*/}
                {/*    <Chip*/}
                {/*        variant="soft"*/}
                {/*        size="sm"*/}
                {/*        endDecorator={<ChipDelete variant="soft"/>}*/}
                {/*        sx={{'--Chip-radius': (theme) => theme.vars.radius.sm}}*/}
                {/*    >*/}
                {/*        UI designer*/}
                {/*    </Chip>*/}
                {/*</Box>*/}
            </Box>
        </Box>
        <ListDivider component="hr"/>
        <Box sx={{p: 2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="body2" textColor="text.primary">
                    Summary
                </Typography>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="primary"
                    sx={{'--IconButton-size': '24px'}}
                >
                    <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
                </IconButton>
            </Box>
            <Box sx={{mt: 2}}>
                <TextField placeholder="Report summary"
                           value={summary}
                           onChange={handleSummaryChange}/>
            </Box>
        </Box>
        <ListDivider component="hr"/>
        <Box sx={{p: 2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="body2" textColor="text.primary">
                    Detail
                </Typography>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="primary"
                    sx={{'--IconButton-size': '24px'}}
                >
                    <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
                </IconButton>
            </Box>
            <Box sx={{mt: 2}}>
                <Textarea placeholder="Detail information about what are you reporting" size="lg"
                          value={content}
                          onChange={handleContentChange}/>
            </Box>
        </Box><ListDivider component="hr"/><Box sx={{p: 2}}>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography level="body2" textColor="text.primary">
                Report type
            </Typography>
            <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{'--IconButton-size': '24px'}}
            >
                <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
            </IconButton>
        </Box>
        <Box sx={{mt: 2}}>
            <RadioGroup name="education" defaultValue="any"
                        value={type}
                        onChange={handleTypeChange}>
                <Radio label="Accidents" value="accidents" size="sm"/>
                <Radio label="Violations" value="violations" size="sm"/>
                <Radio label="Congestion" value="congestion" size="sm"/>
                <Radio label="Misc" value="misc" size="sm"/>
            </RadioGroup>
        </Box>
    </Box><ListDivider component="hr"/><Box sx={{p: 2}}>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/*<Typography level="body2" textColor="text.primary">*/}
            {/*    Previous experience*/}
            {/*</Typography>*/}
            <Button
                size="md"
                color="primary"
                onClick={sendReport}
            >
                Send the report
            </Button>
        </Box>
    </Box>
    </>
}
