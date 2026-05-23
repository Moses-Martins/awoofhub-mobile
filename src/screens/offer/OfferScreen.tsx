import navigationNames from "@/navigation/navigationNames";
import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type OfferScreenProps = NativeStackScreenProps<RootStackParamList, typeof navigationNames.offerScreen>;

export default function OfferScreen({ route }: OfferScreenProps) {

    const { offerId }  = route.params;

    return (
       <>
       </>
    );
};

