const run = async () => {
  const res = await fetch(
    "https://pc-api.polestar.com/eu-north-1/partner-rm-tool/public/",
    {
      body: '{"operationName":"SearchVehicleAds","variables":{"carModel":"PS2","market":"us","offset":0,"limit":10,"sortOrder":"Ascending","sortProperty":"Price","excludeFilters":[{"filterType":"CycleState","value":"New"}]},"query":"query SearchVehicleAds($carModel: CarModel!, $market: String!, $region: String, $offset: Int!, $limit: Int!, $sortOrder: SortOrder2!, $sortProperty: SortProperty!, $equalFilters: [EqualFilter!], $excludeFilters: [ExcludeFilter!]) {\\n  searchVehicleAds(\\n    carModel: $carModel\\n    market: $market\\n    region: $region\\n    offset: $offset\\n    limit: $limit\\n    sortOrder: $sortOrder\\n    sortProperty: $sortProperty\\n    equalFilters: $equalFilters\\n    excludeFilters: $excludeFilters\\n  ) {\\n    metadata {\\n      equalFilters {\\n        filterType\\n        labels {\\n          label\\n          locale\\n          __typename\\n        }\\n        resultCount\\n        totalCount\\n        thumbnail {\\n          alt\\n          url\\n          __typename\\n        }\\n        value\\n        __typename\\n      }\\n      limit\\n      offset\\n      resultCount\\n      totalCount\\n      __typename\\n    }\\n    vehicleAds {\\n      vatDeductible\\n      id\\n      versionTimestamp\\n      firstTimeRegistration\\n      price {\\n        retail\\n        dealer\\n        vat\\n        currency\\n        __typename\\n      }\\n      handoverLocation {\\n        city\\n        name\\n        __typename\\n      }\\n      partnerLocation {\\n        city\\n        name\\n        __typename\\n      }\\n      media {\\n        data\\n        mediaType\\n        __typename\\n      }\\n      mileageInfo {\\n        distance\\n        metric\\n        __typename\\n      }\\n      vehicleDetails {\\n        vin\\n        cycleState\\n        interior {\\n          code\\n          labels {\\n            locale\\n            label\\n            __typename\\n          }\\n          thumbnail {\\n            url\\n            alt\\n            __typename\\n          }\\n          __typename\\n        }\\n        pno34\\n        stockImages\\n        vehicleImages {\\n          url\\n          rawUrl\\n          imageType\\n          category\\n          angle\\n          __typename\\n        }\\n        motorInfo {\\n          labels {\\n            locale\\n            label\\n            __typename\\n          }\\n          value\\n          __typename\\n        }\\n        modelDetails {\\n          modelYear\\n          model\\n          edition\\n          __typename\\n        }\\n        rangeInformation {\\n          labels {\\n            label\\n            locale\\n            __typename\\n          }\\n          value\\n          __typename\\n        }\\n        engineDetails {\\n          powerInfo {\\n            locale\\n            label\\n            __typename\\n          }\\n          __typename\\n        }\\n        drivetrainInfo {\\n          label\\n          locale\\n          __typename\\n        }\\n        pilotPackage {\\n          labels {\\n            label\\n            locale\\n            __typename\\n          }\\n          __typename\\n        }\\n        plusPackage {\\n          labels {\\n            label\\n            locale\\n            __typename\\n          }\\n          __typename\\n        }\\n        exterior {\\n          code\\n          labels {\\n            label\\n            locale\\n            __typename\\n          }\\n          __typename\\n        }\\n        performancePackage {\\n          code\\n          labels {\\n            label\\n            locale\\n            __typename\\n          }\\n          __typename\\n        }\\n        vehicleAdExtras {\\n          id\\n          type\\n          items {\\n            id\\n            title\\n            image\\n            articleNumber\\n            __typename\\n          }\\n          languageCode\\n          __typename\\n        }\\n        seats\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "https://www.polestar.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
    }
  );

  const data = await res.json();

  const vehicles = data.data.searchVehicleAds.vehicleAds;

  vehicles.forEach((vehicle) => {
    console.log("$" + vehicle.price.dealer);
    console.log(
      vehicle.vehicleDetails.modelDetails.modelYear +
        " " +
        vehicle.vehicleDetails.modelDetails.model
    );
    console.log(
      `[${vehicle.vehicleDetails.pilotPackage ? "x" : " "}] Pilot [${
        vehicle.vehicleDetails.plusPackage ? "x" : " "
      }] Plus`
    );
    console.log(vehicle.vehicleDetails.motorInfo.labels[0].label);
    console.log(
      vehicle.mileageInfo.distance + " " + vehicle.mileageInfo.metric
    );

    console.log(vehicle.partnerLocation.name);
    console.log(vehicle.vehicleDetails.vin);

    console.log(
      "https://www.polestar.com/us/preowned-cars/product/polestar-2/" +
        vehicle.id
    );
    console.log();
  });
};

run();
