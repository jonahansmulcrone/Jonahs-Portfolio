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
        const { children, value, index } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                style={{width: '100%'}}
            >
                {value === index && (
                    <Box sx={{ p: 1.5 }}>
                        <Typography><div className={styles.tabContent}>{children}</div></Typography>
                    </Box>
                )}
            </div>
        );
    }

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={styles.tabGroupContainer}>
            <Box
                sx={{ flexGrow: 1, bgcolor: '#3D5656', display: 'flex', height: 450 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        width: 320,
                        height: 275,
                        borderRight: 1,
                        borderColor: 'divider',
                        '.MuiTabs-indicator': {
                            left: 0,
                            right: 'unset',
                            width: '3px',
                            backgroundColor: '#edb50c',
                        },
                        '.MuiTab-root': {
                            color: '#fff',
                            alignItems: 'flex-start',
                        },
                    }}
                >
                    <Tab
                        label="Pierce County IT"
                        style={{
                            fontFamily: 'Fira Code',
                            fontSize: '16px',
                            textTransform: 'none',
                            textDecoration: 'none',
                            color: value === 0 ? '#edb50c' : '#fff',
                        }}
                    />
                    <Tab
                        label="Onyx AI"
                        style={{
                            fontFamily: 'Fira Code',
                            fontSize: '16px',
                            textTransform: 'none',
                            textDecoration: 'none',
                            color: value === 1 ? '#edb50c' : '#fff',
                        }}
                    />
                    <Tab
                        label="Alaska Airlines"
                        style={{
                            fontFamily: 'Fira Code',
                            fontSize: '16px',
                            textTransform: 'none',
                            textDecoration: 'none',
                            color: value === 2 ? '#edb50c' : '#fff',
                        }}
                    />
                </Tabs>
                <TabPanel value={value} index={0}>
                        <div className={styles.tabJobTitle}>
                            Software Engineer Intern <span className={styles.accentColor}>@ Pierce County</span>
                        </div>
                        <div className={styles.tabJobDateRange}>
                            June 2024 - Present
                        </div>
                        <div>
                            <ul className={styles.ul}>
                                <li>Transitioned geocoding CLI applications to <span className={styles.accentColor}>Spring Boot</span> micro web services to improve scalability, and developed <span className={styles.accentColor}>JUnit</span> tests with MockMvc, improving overall code coverage.</li>
                                <li >Migrated Protractor E2E tests to <span className={styles.accentColor}>Cypress E2E</span> for an <span className={styles.accentColor}>Angular</span> application, improving and modernizing test automation capabilities</li>
                                <li>Expanded map tile functionality in the Pierce Application Core Library (PAC) by incorporating support through APIs like <span className={styles.accentColor}>OpenLayers</span> and <span className={styles.accentColor}>ArcGIS</span>.</li>
                            </ul>
                        </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <div className={styles.tabJobTitle}>
                            Software Engineer <span className={styles.accentColor}>@ Onyx AI</span>
                        </div>
                        <div className={styles.tabJobDateRange}>
                            August 2024 - Present
                        </div>
                        <div>
                            <ul className={styles.ul}>
                                <li>Spearheaded the transition to <span className={styles.accentColor}>Firebase Firestore</span> for the development of a real-time chatbot service in <span className={styles.accentColor}>ReactJS</span>, which connects to an AWS Lambda through a WebSocket server.</li>
                                <li >Integrated <span className={styles.accentColor}>Firebase Auth</span> to create a user service that streamlines the registration and sign-in process.</li>
                                <li>Implemented dynamic routing for viewing conversation history by using <span className={styles.accentColor}>React-Router-DOM</span> for seamless navigation, while utilizing UUID to ensure unique identification for each conversation.</li>
                            </ul>
                        </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <div className={styles.tabJobTitle}>
                            Financial Analyst Intern <span className={styles.accentColor}>@ Alaska Airlines</span>
                        </div>
                        <div className={styles.tabJobDateRange}>
                            May 2022 - August 2022
                        </div>
                        <div>
                            <ul className={styles.ul}>
                                <li>Analyzed Alaska’s real estate (e.g. rents, landing fees) expenses between airports located in California & the Pacific Northwest to determine major cost discrepancies.</li>
                                <li >Built a forecasting model for by identifying seasonal trends of fuel usage for ground support equipment.</li>
                            </ul>
                        </div>
                </TabPanel>
            </Box>
        </div>
    );
}

export default TabGroup;