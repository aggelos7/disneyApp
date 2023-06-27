import { createAction, props } from "@ngrx/store";
import { Pagination } from "../shared/models/pagination";

export const newPagination = createAction(
    '[App] Pagination',
    props<Pagination>(),
);