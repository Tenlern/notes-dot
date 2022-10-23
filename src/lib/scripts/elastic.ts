import { Client } from "@elastic/elasticsearch";

export default const client = new Client({
    node: "https://localhost:9200"
})
