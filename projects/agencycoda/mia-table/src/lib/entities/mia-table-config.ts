import { MiaBaseCrudHttpService, MiaQuery } from "@agencycoda/mia-core";
import { MiaColumn } from "./mia-column";

export class MiaTableConfig {
    columns: Array<MiaColumn> = [];
    service!: MiaBaseCrudHttpService<any>;
    query: MiaQuery = new MiaQuery();
}
