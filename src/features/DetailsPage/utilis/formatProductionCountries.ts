import { ProductionCountry } from "../../../common/aliases/interfaces/ProductionCountry";
import { OrUndefined } from "../../../common/aliases/types/OrUndefined";

export const formatProductionCountries = (productionCountries: OrUndefined<ProductionCountry[]>) => {
    const countriesNames = productionCountries?.map(({ name }) => name);
    return countriesNames?.join(", ");
};