import React from "react"
import {
  OrphanagesMapContainer,
  CalloutContainer,
  CreateOrphanage,
  Footer,
  FoundOrphanages,
  OrphanageName,
  SCallout,
  SMapView,
  SMarker,
} from "./styles"
import { PROVIDER_GOOGLE } from "react-native-maps"

import mapMarker from "../../assets/map-marker.png"
import { Feather } from "@expo/vector-icons"

interface OrphanagesMapProps {}

const OrphanagesMap: React.FC<OrphanagesMapProps> = () => {
  return (
    <OrphanagesMapContainer>
      <SMapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -12.9965896,
          longitude: -38.458835,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <SMarker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -12.9965896,
            longitude: -38.458835,
          }}
        >
          <SCallout tooltip onPress={() => {}}>
            <CalloutContainer>
              <OrphanageName>Lar das meninas</OrphanageName>
            </CalloutContainer>
          </SCallout>
        </SMarker>
      </SMapView>

      <Footer>
        <FoundOrphanages>2 orfanatos encontrados</FoundOrphanages>

        <CreateOrphanage onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanage>
      </Footer>
    </OrphanagesMapContainer>
  )
}
export default OrphanagesMap
