import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ mt: 5, p: 4, background: '#011a20', color: '#d3d3d3' }}>
            {/* Główna sekcja prostokątów */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
                {/* Lewy prostokąt */}
                <Box sx={{ flex: 1, textAlign: 'center', border: '2px solid #8e8e86', borderRadius: 5, p: 1 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        O Nas
                    </Typography>
                    <Typography>
                        Pizza 365 sp. z o.o.
                        <br />
                        Lokale:
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Katowice: ul. Zielonej 66, 40-001
                        <br />
                        Telefon: +48 32 123 2137
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Sosnowiec: ul. Rukoli 12, 41-200
                        <br />
                        Telefon: +48 32 765 2137
                    </Typography>
                </Box>

                {/* Środkowy prostokąt */}
                <Box sx={{ flex: 1, textAlign: 'center', border: '2px solid #8e8e86', borderRadius: 5, p: 1 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        INFORMACJE
                    </Typography>
                    <Typography>
                        <Link href="https://www.google.com/search?q=alergeny" target="_blank" color="inherit" underline="hover">
                            Alergeny i wartości odżywcze
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="https://www.google.com/search?q=regulaminy" target="_blank" color="inherit" underline="hover">
                            Regulaminy
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="https://www.google.com/search?q=faq" target="_blank" color="inherit" underline="hover">
                            FAQ
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="https://www.google.com/search?q=ustawienia+plikow+cookie" target="_blank" color="inherit" underline="hover">
                            Ustawienia plików cookie
                        </Link>
                    </Typography>
                </Box>

                {/* Prawy prostokąt */}
                <Box sx={{ flex: 1, textAlign: 'center', border: '2px solid #8e8e86', borderRadius: 5, p: 1 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Nasze Lokale
                    </Typography>
                    <iframe
                        title="Mapa Katowic"
                        src="https://maps.google.com/maps?q=katowice&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="200"
                        style={{
                            border: 'none',
                            borderRadius: '10px',
                        }}
                    ></iframe>
                </Box>
            </Box>

            {/* Dolna sekcja */}
            <Divider sx={{ my: 3, border: '2px solid #BFB78F' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2">© Pizza 365</Typography>
                <Typography variant="body2">Patryk Konior Copyright</Typography>
            </Box>
        </Box>
    );
};

export default Footer;
