import { MiaBaseCrudHttpService, MiaQuery } from "@agencycoda/mia-core";
import { Subject } from "rxjs";
import { MiaColumn } from "./mia-column";

export class MiaTableConfig {
    columns: Array<MiaColumn> = [];
    service!: MiaBaseCrudHttpService<any>;
    query: MiaQuery = new MiaQuery();

    onClick: Subject<{key: string, item: any }> = new Subject();

    hasEmptyScreen = false;
    emptyScreenImage?: string;
    emptyScreenTitle?: string;
    emptyScreenText?: string;
}
