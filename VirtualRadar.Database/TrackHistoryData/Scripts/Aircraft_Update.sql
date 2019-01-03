﻿UPDATE [Aircraft]
SET    [Icao] =                 @Icao
      ,[IcaoCountryID] =        @IcaoCountryID
      ,[Registration] =         @Registration
      ,[Serial] =               @Serial
      ,[YearBuilt] =            @YearBuilt
      ,[IsInteresting] =        @IsInteresting
      ,[Notes] =                @Notes
      ,[LastLookupUtc] =        @LastLookupUtc
      ,[IsMissingFromLookup] =  @IsMissingFromLookup
      ,[SuppressAutoUpdates] =  @SuppressAutoUpdates
      ,[UpdatedUtc] =           @UpdatedUtc
WHERE  [AircraftID] = @AircraftID;

SELECT [CreatedUtc]
FROM   [Aircraft]
WHERE  [AircraftID] = @AircraftID;