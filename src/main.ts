import "reflect-metadata";
import * as dbc from "common/dbc";
import * as server from "common/server"
import * as daemon from "common/daemon"

async function init() {
    await dbc.connect();
    await server.run();
    await daemon.run();
}

init();

