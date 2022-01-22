import {CREATE_BRAND_ROUTE, CREATE_PRODUCT_ROUTE, CREATE_TYPE_ROUTE} from "./constants";
import CreateBrand from "../../components/AddBrand/CreateBrand";
import CreateType from "../../components/CreateType/CreateType";
import CreateProduct from "../../components/CreateProduct/CreateProduct";

export const adminRoutes = [
    {
        path: CREATE_BRAND_ROUTE,
        Component: CreateBrand
    },
    {
        path: CREATE_TYPE_ROUTE,
        Component: CreateType
    },
    {
        path: CREATE_PRODUCT_ROUTE,
        Component: CreateProduct
    }
]