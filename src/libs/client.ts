import dotenv from "dotenv";
import { StreamChat } from "stream-chat";

dotenv.config();

const { STREAM_API_KEY, STREAM_API_SECRET } = process.env;
const client = StreamChat.getInstance(STREAM_API_KEY!, STREAM_API_SECRET);

export { client };
