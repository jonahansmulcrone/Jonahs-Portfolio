import styles from './TabGroup.module.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const TabGroup: React.FC = () => {
    const [value, setValue] = useState(0);


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

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.tabGroupContainer}>
            <Box
                sx={{ flexGrow: 1, bgcolor: '#3D5656', display: 'flex', height: 100 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        borderRight: 1,
                        borderColor: 'divider',
                        '.MuiTabs-indicator': {
                            left: 0, 
                            right: 'unset', 
                            width: '3px', 
                            backgroundColor: '#C6E4EC', 
                        },
                        '.MuiTab-root': {
                            color: '#fff', 
                            alignItems: 'flex-start',
                            '&.Mui-selected': {
                                color: '#C6E4EC',
                                backgroundColor: '#6D8F90'
                            },
                        },
                    }}
                >
                    <Tab
                        label="Pierce County"
                        style={{
                            fontFamily: 'Fira Code',
                            textTransform: 'none',
                            textDecoration: 'none',
                            color: value === 0 ? '#C6E4EC' : '#fff',
                        }}
                    />
                    <Tab
                        label="Onyx AI"
                        style={{
                            fontFamily: 'Fira Code',
                            textTransform: 'none',
                            textDecoration: 'none',
                            color: value === 1 ? '#C6E4EC' : '#fff',
                        }}
                    />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Box>
        </div>
    );
}

export default TabGroup;