import app from './app';
import { config } from './config/getConfig';

const PORT = config.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
