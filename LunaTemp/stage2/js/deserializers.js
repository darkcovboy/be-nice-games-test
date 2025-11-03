var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.JointSpring' )
  var i1961 = data
  i1960.spring = i1961[0]
  i1960.damper = i1961[1]
  i1960.targetPosition = i1961[2]
  return i1960
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.JointMotor' )
  var i1963 = data
  i1962.m_TargetVelocity = i1963[0]
  i1962.m_Force = i1963[1]
  i1962.m_FreeSpin = i1963[2]
  return i1962
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.JointLimits' )
  var i1965 = data
  i1964.m_Min = i1965[0]
  i1964.m_Max = i1965[1]
  i1964.m_Bounciness = i1965[2]
  i1964.m_BounceMinVelocity = i1965[3]
  i1964.m_ContactDistance = i1965[4]
  i1964.minBounce = i1965[5]
  i1964.maxBounce = i1965[6]
  return i1964
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.JointDrive' )
  var i1967 = data
  i1966.m_PositionSpring = i1967[0]
  i1966.m_PositionDamper = i1967[1]
  i1966.m_MaximumForce = i1967[2]
  return i1966
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1969 = data
  i1968.m_Spring = i1969[0]
  i1968.m_Damper = i1969[1]
  return i1968
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1971 = data
  i1970.m_Limit = i1971[0]
  i1970.m_Bounciness = i1971[1]
  i1970.m_ContactDistance = i1971[2]
  return i1970
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1972 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1973 = data
  i1972.m_ExtremumSlip = i1973[0]
  i1972.m_ExtremumValue = i1973[1]
  i1972.m_AsymptoteSlip = i1973[2]
  i1972.m_AsymptoteValue = i1973[3]
  i1972.m_Stiffness = i1973[4]
  return i1972
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1975 = data
  i1974.m_LowerAngle = i1975[0]
  i1974.m_UpperAngle = i1975[1]
  return i1974
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1977 = data
  i1976.m_MotorSpeed = i1977[0]
  i1976.m_MaximumMotorTorque = i1977[1]
  return i1976
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1979 = data
  i1978.m_DampingRatio = i1979[0]
  i1978.m_Frequency = i1979[1]
  i1978.m_Angle = i1979[2]
  return i1978
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1981 = data
  i1980.m_LowerTranslation = i1981[0]
  i1980.m_UpperTranslation = i1981[1]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1983 = data
  i1982.position = new pc.Vec3( i1983[0], i1983[1], i1983[2] )
  i1982.scale = new pc.Vec3( i1983[3], i1983[4], i1983[5] )
  i1982.rotation = new pc.Quat(i1983[6], i1983[7], i1983[8], i1983[9])
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, 'sharedMesh')
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1987 = data
  request.r(i1987[0], i1987[1], 0, i1986, 'additionalVertexStreams')
  i1986.enabled = !!i1987[2]
  request.r(i1987[3], i1987[4], 0, i1986, 'sharedMaterial')
  var i1989 = i1987[5]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 2) {
  request.r(i1989[i + 0], i1989[i + 1], 2, i1988, '')
  }
  i1986.sharedMaterials = i1988
  i1986.receiveShadows = !!i1987[6]
  i1986.shadowCastingMode = i1987[7]
  i1986.sortingLayerID = i1987[8]
  i1986.sortingOrder = i1987[9]
  i1986.lightmapIndex = i1987[10]
  i1986.lightmapSceneIndex = i1987[11]
  i1986.lightmapScaleOffset = new pc.Vec4( i1987[12], i1987[13], i1987[14], i1987[15] )
  i1986.lightProbeUsage = i1987[16]
  i1986.reflectionProbeUsage = i1987[17]
  return i1986
}

Deserializers["Game.Scripts.HexSystem.HexPiece"] = function (request, data, root) {
  var i1992 = root || request.c( 'Game.Scripts.HexSystem.HexPiece' )
  var i1993 = data
  i1992._hexColorType = i1993[0]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.tagId = i1995[1]
  i1994.enabled = !!i1995[2]
  i1994.isStatic = !!i1995[3]
  i1994.layer = i1995[4]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1997 = data
  i1996.name = i1997[0]
  i1996.halfPrecision = !!i1997[1]
  i1996.useUInt32IndexFormat = !!i1997[2]
  i1996.vertexCount = i1997[3]
  i1996.aabb = i1997[4]
  var i1999 = i1997[5]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( !!i1999[i + 0] );
  }
  i1996.streams = i1998
  i1996.vertices = i1997[6]
  var i2001 = i1997[7]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2001[i + 0]) );
  }
  i1996.subMeshes = i2000
  var i2003 = i1997[8]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 16) {
    i2002.push( new pc.Mat4().setData(i2003[i + 0], i2003[i + 1], i2003[i + 2], i2003[i + 3],  i2003[i + 4], i2003[i + 5], i2003[i + 6], i2003[i + 7],  i2003[i + 8], i2003[i + 9], i2003[i + 10], i2003[i + 11],  i2003[i + 12], i2003[i + 13], i2003[i + 14], i2003[i + 15]) );
  }
  i1996.bindposes = i2002
  var i2005 = i1997[9]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2005[i + 0]) );
  }
  i1996.blendShapes = i2004
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2011 = data
  i2010.triangles = i2011[0]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2017 = data
  i2016.name = i2017[0]
  var i2019 = i2017[1]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2019[i + 0]) );
  }
  i2016.frames = i2018
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2020 = root || new pc.UnityMaterial()
  var i2021 = data
  i2020.name = i2021[0]
  request.r(i2021[1], i2021[2], 0, i2020, 'shader')
  i2020.renderQueue = i2021[3]
  i2020.enableInstancing = !!i2021[4]
  var i2023 = i2021[5]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2023[i + 0]) );
  }
  i2020.floatParameters = i2022
  var i2025 = i2021[6]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2025[i + 0]) );
  }
  i2020.colorParameters = i2024
  var i2027 = i2021[7]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2027[i + 0]) );
  }
  i2020.vectorParameters = i2026
  var i2029 = i2021[8]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2029[i + 0]) );
  }
  i2020.textureParameters = i2028
  var i2031 = i2021[9]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2031[i + 0]) );
  }
  i2020.materialFlags = i2030
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.value = i2035[1]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.value = new pc.Color(i2039[1], i2039[2], i2039[3], i2039[4])
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2043 = data
  i2042.name = i2043[0]
  i2042.value = new pc.Vec4( i2043[1], i2043[2], i2043[3], i2043[4] )
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2047 = data
  i2046.name = i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'value')
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.enabled = !!i2051[1]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2053 = data
  i2052.name = i2053[0]
  i2052.width = i2053[1]
  i2052.height = i2053[2]
  i2052.mipmapCount = i2053[3]
  i2052.anisoLevel = i2053[4]
  i2052.filterMode = i2053[5]
  i2052.hdr = !!i2053[6]
  i2052.format = i2053[7]
  i2052.wrapMode = i2053[8]
  i2052.alphaIsTransparency = !!i2053[9]
  i2052.alphaSource = i2053[10]
  i2052.graphicsFormat = i2053[11]
  i2052.sRGBTexture = !!i2053[12]
  i2052.desiredColorSpace = i2053[13]
  i2052.wrapU = i2053[14]
  i2052.wrapV = i2053[15]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2055 = data
  i2054.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2055[0], i2054.main)
  i2054.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2055[1], i2054.colorBySpeed)
  i2054.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2055[2], i2054.colorOverLifetime)
  i2054.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2055[3], i2054.emission)
  i2054.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2055[4], i2054.rotationBySpeed)
  i2054.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2055[5], i2054.rotationOverLifetime)
  i2054.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2055[6], i2054.shape)
  i2054.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2055[7], i2054.sizeBySpeed)
  i2054.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2055[8], i2054.sizeOverLifetime)
  i2054.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2055[9], i2054.textureSheetAnimation)
  i2054.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2055[10], i2054.velocityOverLifetime)
  i2054.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2055[11], i2054.noise)
  i2054.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2055[12], i2054.inheritVelocity)
  i2054.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2055[13], i2054.forceOverLifetime)
  i2054.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2055[14], i2054.limitVelocityOverLifetime)
  i2054.useAutoRandomSeed = !!i2055[15]
  i2054.randomSeed = i2055[16]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemMain()
  var i2057 = data
  i2056.duration = i2057[0]
  i2056.loop = !!i2057[1]
  i2056.prewarm = !!i2057[2]
  i2056.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[3], i2056.startDelay)
  i2056.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[4], i2056.startLifetime)
  i2056.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[5], i2056.startSpeed)
  i2056.startSize3D = !!i2057[6]
  i2056.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[7], i2056.startSizeX)
  i2056.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[8], i2056.startSizeY)
  i2056.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[9], i2056.startSizeZ)
  i2056.startRotation3D = !!i2057[10]
  i2056.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[11], i2056.startRotationX)
  i2056.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[12], i2056.startRotationY)
  i2056.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[13], i2056.startRotationZ)
  i2056.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2057[14], i2056.startColor)
  i2056.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[15], i2056.gravityModifier)
  i2056.simulationSpace = i2057[16]
  request.r(i2057[17], i2057[18], 0, i2056, 'customSimulationSpace')
  i2056.simulationSpeed = i2057[19]
  i2056.useUnscaledTime = !!i2057[20]
  i2056.scalingMode = i2057[21]
  i2056.playOnAwake = !!i2057[22]
  i2056.maxParticles = i2057[23]
  i2056.emitterVelocityMode = i2057[24]
  i2056.stopAction = i2057[25]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2058 = root || new pc.MinMaxCurve()
  var i2059 = data
  i2058.mode = i2059[0]
  i2058.curveMin = new pc.AnimationCurve( { keys_flow: i2059[1] } )
  i2058.curveMax = new pc.AnimationCurve( { keys_flow: i2059[2] } )
  i2058.curveMultiplier = i2059[3]
  i2058.constantMin = i2059[4]
  i2058.constantMax = i2059[5]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2060 = root || new pc.MinMaxGradient()
  var i2061 = data
  i2060.mode = i2061[0]
  i2060.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2061[1], i2060.gradientMin)
  i2060.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2061[2], i2060.gradientMax)
  i2060.colorMin = new pc.Color(i2061[3], i2061[4], i2061[5], i2061[6])
  i2060.colorMax = new pc.Color(i2061[7], i2061[8], i2061[9], i2061[10])
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2063 = data
  i2062.mode = i2063[0]
  var i2065 = i2063[1]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2065[i + 0]) );
  }
  i2062.colorKeys = i2064
  var i2067 = i2063[2]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2067[i + 0]) );
  }
  i2062.alphaKeys = i2066
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2068 = root || new pc.ParticleSystemColorBySpeed()
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2069[1], i2068.color)
  i2068.range = new pc.Vec2( i2069[2], i2069[3] )
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2073 = data
  i2072.color = new pc.Color(i2073[0], i2073[1], i2073[2], i2073[3])
  i2072.time = i2073[4]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2077 = data
  i2076.alpha = i2077[0]
  i2076.time = i2077[1]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemColorOverLifetime()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2079[1], i2078.color)
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemEmitter()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[1], i2080.rateOverTime)
  i2080.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.rateOverDistance)
  var i2083 = i2081[3]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2083[i + 0]) );
  }
  i2080.bursts = i2082
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2086 = root || new pc.ParticleSystemBurst()
  var i2087 = data
  i2086.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[0], i2086.count)
  i2086.cycleCount = i2087[1]
  i2086.minCount = i2087[2]
  i2086.maxCount = i2087[3]
  i2086.repeatInterval = i2087[4]
  i2086.time = i2087[5]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemRotationBySpeed()
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[1], i2088.x)
  i2088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[2], i2088.y)
  i2088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[3], i2088.z)
  i2088.separateAxes = !!i2089[4]
  i2088.range = new pc.Vec2( i2089[5], i2089[6] )
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[1], i2090.x)
  i2090.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[2], i2090.y)
  i2090.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.z)
  i2090.separateAxes = !!i2091[4]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemShape()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.shapeType = i2093[1]
  i2092.randomDirectionAmount = i2093[2]
  i2092.sphericalDirectionAmount = i2093[3]
  i2092.randomPositionAmount = i2093[4]
  i2092.alignToDirection = !!i2093[5]
  i2092.radius = i2093[6]
  i2092.radiusMode = i2093[7]
  i2092.radiusSpread = i2093[8]
  i2092.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[9], i2092.radiusSpeed)
  i2092.radiusThickness = i2093[10]
  i2092.angle = i2093[11]
  i2092.length = i2093[12]
  i2092.boxThickness = new pc.Vec3( i2093[13], i2093[14], i2093[15] )
  i2092.meshShapeType = i2093[16]
  request.r(i2093[17], i2093[18], 0, i2092, 'mesh')
  request.r(i2093[19], i2093[20], 0, i2092, 'meshRenderer')
  request.r(i2093[21], i2093[22], 0, i2092, 'skinnedMeshRenderer')
  i2092.useMeshMaterialIndex = !!i2093[23]
  i2092.meshMaterialIndex = i2093[24]
  i2092.useMeshColors = !!i2093[25]
  i2092.normalOffset = i2093[26]
  i2092.arc = i2093[27]
  i2092.arcMode = i2093[28]
  i2092.arcSpread = i2093[29]
  i2092.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[30], i2092.arcSpeed)
  i2092.donutRadius = i2093[31]
  i2092.position = new pc.Vec3( i2093[32], i2093[33], i2093[34] )
  i2092.rotation = new pc.Vec3( i2093[35], i2093[36], i2093[37] )
  i2092.scale = new pc.Vec3( i2093[38], i2093[39], i2093[40] )
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemSizeBySpeed()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[1], i2094.x)
  i2094.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[2], i2094.y)
  i2094.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[3], i2094.z)
  i2094.separateAxes = !!i2095[4]
  i2094.range = new pc.Vec2( i2095[5], i2095[6] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[1], i2096.x)
  i2096.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.y)
  i2096.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[3], i2096.z)
  i2096.separateAxes = !!i2097[4]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2098 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.mode = i2099[1]
  i2098.animation = i2099[2]
  i2098.numTilesX = i2099[3]
  i2098.numTilesY = i2099[4]
  i2098.useRandomRow = !!i2099[5]
  i2098.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[6], i2098.frameOverTime)
  i2098.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[7], i2098.startFrame)
  i2098.cycleCount = i2099[8]
  i2098.rowIndex = i2099[9]
  i2098.flipU = i2099[10]
  i2098.flipV = i2099[11]
  i2098.spriteCount = i2099[12]
  var i2101 = i2099[13]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2098.sprites = i2100
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2104 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2105 = data
  i2104.enabled = !!i2105[0]
  i2104.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[1], i2104.x)
  i2104.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[2], i2104.y)
  i2104.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[3], i2104.z)
  i2104.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[4], i2104.radial)
  i2104.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[5], i2104.speedModifier)
  i2104.space = i2105[6]
  i2104.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[7], i2104.orbitalX)
  i2104.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[8], i2104.orbitalY)
  i2104.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[9], i2104.orbitalZ)
  i2104.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[10], i2104.orbitalOffsetX)
  i2104.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[11], i2104.orbitalOffsetY)
  i2104.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2105[12], i2104.orbitalOffsetZ)
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2106 = root || new pc.ParticleSystemNoise()
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.separateAxes = !!i2107[1]
  i2106.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[2], i2106.strengthX)
  i2106.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[3], i2106.strengthY)
  i2106.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[4], i2106.strengthZ)
  i2106.frequency = i2107[5]
  i2106.damping = !!i2107[6]
  i2106.octaveCount = i2107[7]
  i2106.octaveMultiplier = i2107[8]
  i2106.octaveScale = i2107[9]
  i2106.quality = i2107[10]
  i2106.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[11], i2106.scrollSpeed)
  i2106.scrollSpeedMultiplier = i2107[12]
  i2106.remapEnabled = !!i2107[13]
  i2106.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[14], i2106.remapX)
  i2106.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[15], i2106.remapY)
  i2106.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[16], i2106.remapZ)
  i2106.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[17], i2106.positionAmount)
  i2106.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[18], i2106.rotationAmount)
  i2106.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[19], i2106.sizeAmount)
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2108 = root || new pc.ParticleSystemInheritVelocity()
  var i2109 = data
  i2108.enabled = !!i2109[0]
  i2108.mode = i2109[1]
  i2108.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[2], i2108.curve)
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2110 = root || new pc.ParticleSystemForceOverLifetime()
  var i2111 = data
  i2110.enabled = !!i2111[0]
  i2110.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[1], i2110.x)
  i2110.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[2], i2110.y)
  i2110.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[3], i2110.z)
  i2110.space = i2111[4]
  i2110.randomized = !!i2111[5]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2112 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[1], i2112.limit)
  i2112.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[2], i2112.limitX)
  i2112.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[3], i2112.limitY)
  i2112.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[4], i2112.limitZ)
  i2112.dampen = i2113[5]
  i2112.separateAxes = !!i2113[6]
  i2112.space = i2113[7]
  i2112.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[8], i2112.drag)
  i2112.multiplyDragByParticleSize = !!i2113[9]
  i2112.multiplyDragByParticleVelocity = !!i2113[10]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'mesh')
  i2114.meshCount = i2115[2]
  i2114.activeVertexStreamsCount = i2115[3]
  i2114.alignment = i2115[4]
  i2114.renderMode = i2115[5]
  i2114.sortMode = i2115[6]
  i2114.lengthScale = i2115[7]
  i2114.velocityScale = i2115[8]
  i2114.cameraVelocityScale = i2115[9]
  i2114.normalDirection = i2115[10]
  i2114.sortingFudge = i2115[11]
  i2114.minParticleSize = i2115[12]
  i2114.maxParticleSize = i2115[13]
  i2114.pivot = new pc.Vec3( i2115[14], i2115[15], i2115[16] )
  request.r(i2115[17], i2115[18], 0, i2114, 'trailMaterial')
  i2114.applyActiveColorSpace = !!i2115[19]
  i2114.enabled = !!i2115[20]
  request.r(i2115[21], i2115[22], 0, i2114, 'sharedMaterial')
  var i2117 = i2115[23]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2114.sharedMaterials = i2116
  i2114.receiveShadows = !!i2115[24]
  i2114.shadowCastingMode = i2115[25]
  i2114.sortingLayerID = i2115[26]
  i2114.sortingOrder = i2115[27]
  i2114.lightmapIndex = i2115[28]
  i2114.lightmapSceneIndex = i2115[29]
  i2114.lightmapScaleOffset = new pc.Vec4( i2115[30], i2115[31], i2115[32], i2115[33] )
  i2114.lightProbeUsage = i2115[34]
  i2114.reflectionProbeUsage = i2115[35]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2119 = data
  i2118.pivot = new pc.Vec2( i2119[0], i2119[1] )
  i2118.anchorMin = new pc.Vec2( i2119[2], i2119[3] )
  i2118.anchorMax = new pc.Vec2( i2119[4], i2119[5] )
  i2118.sizeDelta = new pc.Vec2( i2119[6], i2119[7] )
  i2118.anchoredPosition3D = new pc.Vec3( i2119[8], i2119[9], i2119[10] )
  i2118.rotation = new pc.Quat(i2119[11], i2119[12], i2119[13], i2119[14])
  i2118.scale = new pc.Vec3( i2119[15], i2119[16], i2119[17] )
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2121 = data
  i2120.planeDistance = i2121[0]
  i2120.referencePixelsPerUnit = i2121[1]
  i2120.isFallbackOverlay = !!i2121[2]
  i2120.renderMode = i2121[3]
  i2120.renderOrder = i2121[4]
  i2120.sortingLayerName = i2121[5]
  i2120.sortingOrder = i2121[6]
  i2120.scaleFactor = i2121[7]
  request.r(i2121[8], i2121[9], 0, i2120, 'worldCamera')
  i2120.overrideSorting = !!i2121[10]
  i2120.pixelPerfect = !!i2121[11]
  i2120.targetDisplay = i2121[12]
  i2120.overridePixelPerfect = !!i2121[13]
  i2120.enabled = !!i2121[14]
  return i2120
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2123 = data
  i2122.m_UiScaleMode = i2123[0]
  i2122.m_ReferencePixelsPerUnit = i2123[1]
  i2122.m_ScaleFactor = i2123[2]
  i2122.m_ReferenceResolution = new pc.Vec2( i2123[3], i2123[4] )
  i2122.m_ScreenMatchMode = i2123[5]
  i2122.m_MatchWidthOrHeight = i2123[6]
  i2122.m_PhysicalUnit = i2123[7]
  i2122.m_FallbackScreenDPI = i2123[8]
  i2122.m_DefaultSpriteDPI = i2123[9]
  i2122.m_DynamicPixelsPerUnit = i2123[10]
  i2122.m_PresetInfoIsWorld = !!i2123[11]
  return i2122
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2125 = data
  i2124.m_IgnoreReversedGraphics = !!i2125[0]
  i2124.m_BlockingObjects = i2125[1]
  i2124.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2125[2] )
  return i2124
}

Deserializers["Game.Scripts.Effects.HexDisappear"] = function (request, data, root) {
  var i2126 = root || request.c( 'Game.Scripts.Effects.HexDisappear' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, '_mergeSystem')
  var i2129 = i2127[2]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 2) {
  request.r(i2129[i + 0], i2129[i + 1], 2, i2128, '')
  }
  i2126._hexes = i2128
  var i2131 = i2127[3]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 4) {
    i2130.push( new pc.Color(i2131[i + 0], i2131[i + 1], i2131[i + 2], i2131[i + 3]) );
  }
  i2126._colors = i2130
  i2126._maxScale = i2127[4]
  i2126._delayBetweenHexes = i2127[5]
  i2126._pulseDuration = i2127[6]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2137 = data
  i2136.cullTransparentMesh = !!i2137[0]
  return i2136
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.Image' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'm_Sprite')
  i2138.m_Type = i2139[2]
  i2138.m_PreserveAspect = !!i2139[3]
  i2138.m_FillCenter = !!i2139[4]
  i2138.m_FillMethod = i2139[5]
  i2138.m_FillAmount = i2139[6]
  i2138.m_FillClockwise = !!i2139[7]
  i2138.m_FillOrigin = i2139[8]
  i2138.m_UseSpriteMesh = !!i2139[9]
  i2138.m_PixelsPerUnitMultiplier = i2139[10]
  i2138.m_Maskable = !!i2139[11]
  request.r(i2139[12], i2139[13], 0, i2138, 'm_Material')
  i2138.m_Color = new pc.Color(i2139[14], i2139[15], i2139[16], i2139[17])
  i2138.m_RaycastTarget = !!i2139[18]
  i2138.m_RaycastPadding = new pc.Vec4( i2139[19], i2139[20], i2139[21], i2139[22] )
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2141 = data
  i2140.name = i2141[0]
  i2140.atlasId = i2141[1]
  i2140.mipmapCount = i2141[2]
  i2140.hdr = !!i2141[3]
  i2140.size = i2141[4]
  i2140.anisoLevel = i2141[5]
  i2140.filterMode = i2141[6]
  var i2143 = i2141[7]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 4) {
    i2142.push( UnityEngine.Rect.MinMaxRect(i2143[i + 0], i2143[i + 1], i2143[i + 2], i2143[i + 3]) );
  }
  i2140.rects = i2142
  i2140.wrapU = i2141[8]
  i2140.wrapV = i2141[9]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.index = i2147[1]
  i2146.startup = !!i2147[2]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2149 = data
  i2148.aspect = i2149[0]
  i2148.orthographic = !!i2149[1]
  i2148.orthographicSize = i2149[2]
  i2148.backgroundColor = new pc.Color(i2149[3], i2149[4], i2149[5], i2149[6])
  i2148.nearClipPlane = i2149[7]
  i2148.farClipPlane = i2149[8]
  i2148.fieldOfView = i2149[9]
  i2148.depth = i2149[10]
  i2148.clearFlags = i2149[11]
  i2148.cullingMask = i2149[12]
  i2148.rect = i2149[13]
  request.r(i2149[14], i2149[15], 0, i2148, 'targetTexture')
  i2148.usePhysicalProperties = !!i2149[16]
  i2148.focalLength = i2149[17]
  i2148.sensorSize = new pc.Vec2( i2149[18], i2149[19] )
  i2148.lensShift = new pc.Vec2( i2149[20], i2149[21] )
  i2148.gateFit = i2149[22]
  i2148.commandBufferCount = i2149[23]
  i2148.cameraType = i2149[24]
  i2148.enabled = !!i2149[25]
  return i2148
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i2151 = data
  i2150.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i2151[0] )
  i2150.m_MaxRayIntersections = i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2153 = data
  i2152.type = i2153[0]
  i2152.color = new pc.Color(i2153[1], i2153[2], i2153[3], i2153[4])
  i2152.cullingMask = i2153[5]
  i2152.intensity = i2153[6]
  i2152.range = i2153[7]
  i2152.spotAngle = i2153[8]
  i2152.shadows = i2153[9]
  i2152.shadowNormalBias = i2153[10]
  i2152.shadowBias = i2153[11]
  i2152.shadowStrength = i2153[12]
  i2152.shadowResolution = i2153[13]
  i2152.lightmapBakeType = i2153[14]
  i2152.renderMode = i2153[15]
  request.r(i2153[16], i2153[17], 0, i2152, 'cookie')
  i2152.cookieSize = i2153[18]
  i2152.enabled = !!i2153[19]
  return i2152
}

Deserializers["Game.Scripts.HexSystem.HexGrid"] = function (request, data, root) {
  var i2154 = root || request.c( 'Game.Scripts.HexSystem.HexGrid' )
  var i2155 = data
  var i2157 = i2155[0]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('Game.Scripts.HexSystem.HexCell')))
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 1, i2156, '')
  }
  i2154._cells = i2156
  return i2154
}

Deserializers["Game.Scripts.HexSystem.HexCell"] = function (request, data, root) {
  var i2160 = root || request.c( 'Game.Scripts.HexSystem.HexCell' )
  var i2161 = data
  i2160._q = i2161[0]
  i2160._r = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2163 = data
  i2162.center = new pc.Vec3( i2163[0], i2163[1], i2163[2] )
  i2162.size = new pc.Vec3( i2163[3], i2163[4], i2163[5] )
  i2162.enabled = !!i2163[6]
  i2162.isTrigger = !!i2163[7]
  request.r(i2163[8], i2163[9], 0, i2162, 'material')
  return i2162
}

Deserializers["Game.Scripts.Tutorial.TutorialController"] = function (request, data, root) {
  var i2164 = root || request.c( 'Game.Scripts.Tutorial.TutorialController' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, '_overlayGroup')
  request.r(i2165[2], i2165[3], 0, i2164, '_holeMask')
  request.r(i2165[4], i2165[5], 0, i2164, '_handPointer')
  request.r(i2165[6], i2165[7], 0, i2164, '_mainCamera')
  request.r(i2165[8], i2165[9], 0, i2164, '_stackTransform')
  request.r(i2165[10], i2165[11], 0, i2164, '_targetCellTransform')
  i2164._fadeDuration = i2165[12]
  i2164._moveDuration = i2165[13]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2167 = data
  i2166.m_Alpha = i2167[0]
  i2166.m_Interactable = !!i2167[1]
  i2166.m_BlocksRaycasts = !!i2167[2]
  i2166.m_IgnoreParentGroups = !!i2167[3]
  i2166.enabled = !!i2167[4]
  return i2166
}

Deserializers["Game.Scripts.Packshot.PackshotController"] = function (request, data, root) {
  var i2168 = root || request.c( 'Game.Scripts.Packshot.PackshotController' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, '_canvasGroup')
  request.r(i2169[2], i2169[3], 0, i2168, '_button')
  request.r(i2169[4], i2169[5], 0, i2168, '_mergeSystem')
  i2168._fadeDuration = i2169[6]
  i2168._storeUrl = i2169[7]
  return i2168
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.Button' )
  var i2171 = data
  i2170.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2171[0], i2170.m_OnClick)
  i2170.m_Navigation = request.d('UnityEngine.UI.Navigation', i2171[1], i2170.m_Navigation)
  i2170.m_Transition = i2171[2]
  i2170.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2171[3], i2170.m_Colors)
  i2170.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2171[4], i2170.m_SpriteState)
  i2170.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2171[5], i2170.m_AnimationTriggers)
  i2170.m_Interactable = !!i2171[6]
  request.r(i2171[7], i2171[8], 0, i2170, 'm_TargetGraphic')
  return i2170
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2173 = data
  i2172.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2173[0], i2172.m_PersistentCalls)
  return i2172
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2175 = data
  var i2177 = i2175[0]
  var i2176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.add(request.d('UnityEngine.Events.PersistentCall', i2177[i + 0]));
  }
  i2174.m_Calls = i2176
  return i2174
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'm_Target')
  i2180.m_TargetAssemblyTypeName = i2181[2]
  i2180.m_MethodName = i2181[3]
  i2180.m_Mode = i2181[4]
  i2180.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2181[5], i2180.m_Arguments)
  i2180.m_CallState = i2181[6]
  return i2180
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2183 = data
  i2182.m_Mode = i2183[0]
  i2182.m_WrapAround = !!i2183[1]
  request.r(i2183[2], i2183[3], 0, i2182, 'm_SelectOnUp')
  request.r(i2183[4], i2183[5], 0, i2182, 'm_SelectOnDown')
  request.r(i2183[6], i2183[7], 0, i2182, 'm_SelectOnLeft')
  request.r(i2183[8], i2183[9], 0, i2182, 'm_SelectOnRight')
  return i2182
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2185 = data
  i2184.m_NormalColor = new pc.Color(i2185[0], i2185[1], i2185[2], i2185[3])
  i2184.m_HighlightedColor = new pc.Color(i2185[4], i2185[5], i2185[6], i2185[7])
  i2184.m_PressedColor = new pc.Color(i2185[8], i2185[9], i2185[10], i2185[11])
  i2184.m_SelectedColor = new pc.Color(i2185[12], i2185[13], i2185[14], i2185[15])
  i2184.m_DisabledColor = new pc.Color(i2185[16], i2185[17], i2185[18], i2185[19])
  i2184.m_ColorMultiplier = i2185[20]
  i2184.m_FadeDuration = i2185[21]
  return i2184
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'm_HighlightedSprite')
  request.r(i2187[2], i2187[3], 0, i2186, 'm_PressedSprite')
  request.r(i2187[4], i2187[5], 0, i2186, 'm_SelectedSprite')
  request.r(i2187[6], i2187[7], 0, i2186, 'm_DisabledSprite')
  return i2186
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2189 = data
  i2188.m_NormalTrigger = i2189[0]
  i2188.m_HighlightedTrigger = i2189[1]
  i2188.m_PressedTrigger = i2189[2]
  i2188.m_SelectedTrigger = i2189[3]
  i2188.m_DisabledTrigger = i2189[4]
  return i2188
}

Deserializers["Game.Scripts.HexSystem.MergeSystem"] = function (request, data, root) {
  var i2190 = root || request.c( 'Game.Scripts.HexSystem.MergeSystem' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, '_grid')
  i2190._moveDuration = i2191[2]
  i2190._maxStack = i2191[3]
  return i2190
}

Deserializers["Game.Scripts.Effects.GlitterMover"] = function (request, data, root) {
  var i2192 = root || request.c( 'Game.Scripts.Effects.GlitterMover' )
  var i2193 = data
  request.r(i2193[0], i2193[1], 0, i2192, '_mergeSystem')
  request.r(i2193[2], i2193[3], 0, i2192, '_particleSystem')
  return i2192
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'm_FirstSelected')
  i2194.m_sendNavigationEvents = !!i2195[2]
  i2194.m_DragThreshold = i2195[3]
  return i2194
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2197 = data
  i2196.m_HorizontalAxis = i2197[0]
  i2196.m_VerticalAxis = i2197[1]
  i2196.m_SubmitButton = i2197[2]
  i2196.m_CancelButton = i2197[3]
  i2196.m_InputActionsPerSecond = i2197[4]
  i2196.m_RepeatDelay = i2197[5]
  i2196.m_ForceModuleActive = !!i2197[6]
  i2196.m_SendPointerHoverToParent = !!i2197[7]
  return i2196
}

Deserializers["Game.Scripts.InputSystem.HexStackDraggable"] = function (request, data, root) {
  var i2198 = root || request.c( 'Game.Scripts.InputSystem.HexStackDraggable' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, '_tutorialController')
  var i2201 = i2199[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2198._hexPieces = i2200
  i2198._layerMask = UnityEngine.LayerMask.FromIntegerValue( i2199[3] )
  request.r(i2199[4], i2199[5], 0, i2198, '_camera')
  i2198._liftHeight = i2199[6]
  i2198._returnDuration = i2199[7]
  request.r(i2199[8], i2199[9], 0, i2198, '_mergeSystem')
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2205 = data
  i2204.ambientIntensity = i2205[0]
  i2204.reflectionIntensity = i2205[1]
  i2204.ambientMode = i2205[2]
  i2204.ambientLight = new pc.Color(i2205[3], i2205[4], i2205[5], i2205[6])
  i2204.ambientSkyColor = new pc.Color(i2205[7], i2205[8], i2205[9], i2205[10])
  i2204.ambientGroundColor = new pc.Color(i2205[11], i2205[12], i2205[13], i2205[14])
  i2204.ambientEquatorColor = new pc.Color(i2205[15], i2205[16], i2205[17], i2205[18])
  i2204.fogColor = new pc.Color(i2205[19], i2205[20], i2205[21], i2205[22])
  i2204.fogEndDistance = i2205[23]
  i2204.fogStartDistance = i2205[24]
  i2204.fogDensity = i2205[25]
  i2204.fog = !!i2205[26]
  request.r(i2205[27], i2205[28], 0, i2204, 'skybox')
  i2204.fogMode = i2205[29]
  var i2207 = i2205[30]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2207[i + 0]) );
  }
  i2204.lightmaps = i2206
  i2204.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2205[31], i2204.lightProbes)
  i2204.lightmapsMode = i2205[32]
  i2204.mixedBakeMode = i2205[33]
  i2204.environmentLightingMode = i2205[34]
  i2204.ambientProbe = new pc.SphericalHarmonicsL2(i2205[35])
  i2204.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2205[36])
  i2204.useReferenceAmbientProbe = !!i2205[37]
  request.r(i2205[38], i2205[39], 0, i2204, 'customReflection')
  request.r(i2205[40], i2205[41], 0, i2204, 'defaultReflection')
  i2204.defaultReflectionMode = i2205[42]
  i2204.defaultReflectionResolution = i2205[43]
  i2204.sunLightObjectId = i2205[44]
  i2204.pixelLightCount = i2205[45]
  i2204.defaultReflectionHDR = !!i2205[46]
  i2204.hasLightDataAsset = !!i2205[47]
  i2204.hasManualGenerate = !!i2205[48]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'lightmapColor')
  request.r(i2211[2], i2211[3], 0, i2210, 'lightmapDirection')
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2212 = root || new UnityEngine.LightProbes()
  var i2213 = data
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2221 = data
  var i2223 = i2221[0]
  var i2222 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2223[i + 0]));
  }
  i2220.ShaderCompilationErrors = i2222
  i2220.name = i2221[1]
  i2220.guid = i2221[2]
  var i2225 = i2221[3]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( i2225[i + 0] );
  }
  i2220.shaderDefinedKeywords = i2224
  var i2227 = i2221[4]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2227[i + 0]) );
  }
  i2220.passes = i2226
  var i2229 = i2221[5]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2229[i + 0]) );
  }
  i2220.usePasses = i2228
  var i2231 = i2221[6]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2231[i + 0]) );
  }
  i2220.defaultParameterValues = i2230
  request.r(i2221[7], i2221[8], 0, i2220, 'unityFallbackShader')
  i2220.readDepth = !!i2221[9]
  i2220.isCreatedByShaderGraph = !!i2221[10]
  i2220.disableBatching = !!i2221[11]
  i2220.compiled = !!i2221[12]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2235 = data
  i2234.shaderName = i2235[0]
  i2234.errorMessage = i2235[1]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2240 = root || new pc.UnityShaderPass()
  var i2241 = data
  i2240.id = i2241[0]
  i2240.subShaderIndex = i2241[1]
  i2240.name = i2241[2]
  i2240.passType = i2241[3]
  i2240.grabPassTextureName = i2241[4]
  i2240.usePass = !!i2241[5]
  i2240.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[6], i2240.zTest)
  i2240.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[7], i2240.zWrite)
  i2240.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[8], i2240.culling)
  i2240.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2241[9], i2240.blending)
  i2240.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2241[10], i2240.alphaBlending)
  i2240.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[11], i2240.colorWriteMask)
  i2240.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[12], i2240.offsetUnits)
  i2240.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[13], i2240.offsetFactor)
  i2240.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[14], i2240.stencilRef)
  i2240.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[15], i2240.stencilReadMask)
  i2240.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2241[16], i2240.stencilWriteMask)
  i2240.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2241[17], i2240.stencilOp)
  i2240.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2241[18], i2240.stencilOpFront)
  i2240.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2241[19], i2240.stencilOpBack)
  var i2243 = i2241[20]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2243[i + 0]) );
  }
  i2240.tags = i2242
  var i2245 = i2241[21]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( i2245[i + 0] );
  }
  i2240.passDefinedKeywords = i2244
  var i2247 = i2241[22]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2247[i + 0]) );
  }
  i2240.passDefinedKeywordGroups = i2246
  var i2249 = i2241[23]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2249[i + 0]) );
  }
  i2240.variants = i2248
  var i2251 = i2241[24]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2251[i + 0]) );
  }
  i2240.excludedVariants = i2250
  i2240.hasDepthReader = !!i2241[25]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2253 = data
  i2252.val = i2253[0]
  i2252.name = i2253[1]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2255 = data
  i2254.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[0], i2254.src)
  i2254.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[1], i2254.dst)
  i2254.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[2], i2254.op)
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2257 = data
  i2256.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[0], i2256.pass)
  i2256.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[1], i2256.fail)
  i2256.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[2], i2256.zFail)
  i2256.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2257[3], i2256.comp)
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.value = i2261[1]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2265 = data
  var i2267 = i2265[0]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( i2267[i + 0] );
  }
  i2264.keywords = i2266
  i2264.hasDiscard = !!i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2271 = data
  i2270.passId = i2271[0]
  i2270.subShaderIndex = i2271[1]
  var i2273 = i2271[2]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( i2273[i + 0] );
  }
  i2270.keywords = i2272
  i2270.vertexProgram = i2271[3]
  i2270.fragmentProgram = i2271[4]
  i2270.exportedForWebGl2 = !!i2271[5]
  i2270.readDepth = !!i2271[6]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'shader')
  i2276.pass = i2277[2]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.type = i2281[1]
  i2280.value = new pc.Vec4( i2281[2], i2281[3], i2281[4], i2281[5] )
  i2280.textureValue = i2281[6]
  i2280.shaderPropertyFlag = i2281[7]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2283 = data
  i2282.name = i2283[0]
  request.r(i2283[1], i2283[2], 0, i2282, 'texture')
  i2282.aabb = i2283[3]
  i2282.vertices = i2283[4]
  i2282.triangles = i2283[5]
  i2282.textureRect = UnityEngine.Rect.MinMaxRect(i2283[6], i2283[7], i2283[8], i2283[9])
  i2282.packedRect = UnityEngine.Rect.MinMaxRect(i2283[10], i2283[11], i2283[12], i2283[13])
  i2282.border = new pc.Vec4( i2283[14], i2283[15], i2283[16], i2283[17] )
  i2282.transparency = i2283[18]
  i2282.bounds = i2283[19]
  i2282.pixelsPerUnit = i2283[20]
  i2282.textureWidth = i2283[21]
  i2282.textureHeight = i2283[22]
  i2282.nativeSize = new pc.Vec2( i2283[23], i2283[24] )
  i2282.pivot = new pc.Vec2( i2283[25], i2283[26] )
  i2282.textureRectOffset = new pc.Vec2( i2283[27], i2283[28] )
  return i2282
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2284 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2285 = data
  i2284.useSafeMode = !!i2285[0]
  i2284.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2285[1], i2284.safeModeOptions)
  i2284.timeScale = i2285[2]
  i2284.unscaledTimeScale = i2285[3]
  i2284.useSmoothDeltaTime = !!i2285[4]
  i2284.maxSmoothUnscaledTime = i2285[5]
  i2284.rewindCallbackMode = i2285[6]
  i2284.showUnityEditorReport = !!i2285[7]
  i2284.logBehaviour = i2285[8]
  i2284.drawGizmos = !!i2285[9]
  i2284.defaultRecyclable = !!i2285[10]
  i2284.defaultAutoPlay = i2285[11]
  i2284.defaultUpdateType = i2285[12]
  i2284.defaultTimeScaleIndependent = !!i2285[13]
  i2284.defaultEaseType = i2285[14]
  i2284.defaultEaseOvershootOrAmplitude = i2285[15]
  i2284.defaultEasePeriod = i2285[16]
  i2284.defaultAutoKill = !!i2285[17]
  i2284.defaultLoopType = i2285[18]
  i2284.debugMode = !!i2285[19]
  i2284.debugStoreTargetId = !!i2285[20]
  i2284.showPreviewPanel = !!i2285[21]
  i2284.storeSettingsLocation = i2285[22]
  i2284.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2285[23], i2284.modules)
  i2284.createASMDEF = !!i2285[24]
  i2284.showPlayingTweens = !!i2285[25]
  i2284.showPausedTweens = !!i2285[26]
  return i2284
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2286 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2287 = data
  i2286.logBehaviour = i2287[0]
  i2286.nestedTweenFailureBehaviour = i2287[1]
  return i2286
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2288 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2289 = data
  i2288.showPanel = !!i2289[0]
  i2288.audioEnabled = !!i2289[1]
  i2288.physicsEnabled = !!i2289[2]
  i2288.physics2DEnabled = !!i2289[3]
  i2288.spriteEnabled = !!i2289[4]
  i2288.uiEnabled = !!i2289[5]
  i2288.textMeshProEnabled = !!i2289[6]
  i2288.tk2DEnabled = !!i2289[7]
  i2288.deAudioEnabled = !!i2289[8]
  i2288.deUnityExtendedEnabled = !!i2289[9]
  i2288.epoOutlineEnabled = !!i2289[10]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2291 = data
  var i2293 = i2291[0]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2293[i + 0]) );
  }
  i2290.files = i2292
  i2290.componentToPrefabIds = i2291[1]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2297 = data
  i2296.path = i2297[0]
  request.r(i2297[1], i2297[2], 0, i2296, 'unityObject')
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2301[i + 0]) );
  }
  i2298.scriptsExecutionOrder = i2300
  var i2303 = i2299[1]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2303[i + 0]) );
  }
  i2298.sortingLayers = i2302
  var i2305 = i2299[2]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2305[i + 0]) );
  }
  i2298.cullingLayers = i2304
  i2298.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2299[3], i2298.timeSettings)
  i2298.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2299[4], i2298.physicsSettings)
  i2298.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2299[5], i2298.physics2DSettings)
  i2298.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2299[6], i2298.qualitySettings)
  i2298.enableRealtimeShadows = !!i2299[7]
  i2298.enableAutoInstancing = !!i2299[8]
  i2298.enableStaticBatching = !!i2299[9]
  i2298.enableDynamicBatching = !!i2299[10]
  i2298.lightmapEncodingQuality = i2299[11]
  i2298.desiredColorSpace = i2299[12]
  var i2307 = i2299[13]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 1) {
    i2306.push( i2307[i + 0] );
  }
  i2298.allTags = i2306
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2311 = data
  i2310.name = i2311[0]
  i2310.value = i2311[1]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2315 = data
  i2314.id = i2315[0]
  i2314.name = i2315[1]
  i2314.value = i2315[2]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2319 = data
  i2318.id = i2319[0]
  i2318.name = i2319[1]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2321 = data
  i2320.fixedDeltaTime = i2321[0]
  i2320.maximumDeltaTime = i2321[1]
  i2320.timeScale = i2321[2]
  i2320.maximumParticleTimestep = i2321[3]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2323 = data
  i2322.gravity = new pc.Vec3( i2323[0], i2323[1], i2323[2] )
  i2322.defaultSolverIterations = i2323[3]
  i2322.bounceThreshold = i2323[4]
  i2322.autoSyncTransforms = !!i2323[5]
  i2322.autoSimulation = !!i2323[6]
  var i2325 = i2323[7]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 1) {
    i2324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2325[i + 0]) );
  }
  i2322.collisionMatrix = i2324
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2329 = data
  i2328.enabled = !!i2329[0]
  i2328.layerId = i2329[1]
  i2328.otherLayerId = i2329[2]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'material')
  i2330.gravity = new pc.Vec2( i2331[2], i2331[3] )
  i2330.positionIterations = i2331[4]
  i2330.velocityIterations = i2331[5]
  i2330.velocityThreshold = i2331[6]
  i2330.maxLinearCorrection = i2331[7]
  i2330.maxAngularCorrection = i2331[8]
  i2330.maxTranslationSpeed = i2331[9]
  i2330.maxRotationSpeed = i2331[10]
  i2330.baumgarteScale = i2331[11]
  i2330.baumgarteTOIScale = i2331[12]
  i2330.timeToSleep = i2331[13]
  i2330.linearSleepTolerance = i2331[14]
  i2330.angularSleepTolerance = i2331[15]
  i2330.defaultContactOffset = i2331[16]
  i2330.autoSimulation = !!i2331[17]
  i2330.queriesHitTriggers = !!i2331[18]
  i2330.queriesStartInColliders = !!i2331[19]
  i2330.callbacksOnDisable = !!i2331[20]
  i2330.reuseCollisionCallbacks = !!i2331[21]
  i2330.autoSyncTransforms = !!i2331[22]
  var i2333 = i2331[23]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2333[i + 0]) );
  }
  i2330.collisionMatrix = i2332
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2337 = data
  i2336.enabled = !!i2337[0]
  i2336.layerId = i2337[1]
  i2336.otherLayerId = i2337[2]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2339 = data
  var i2341 = i2339[0]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2341[i + 0]) );
  }
  i2338.qualityLevels = i2340
  var i2343 = i2339[1]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( i2343[i + 0] );
  }
  i2338.names = i2342
  i2338.shadows = i2339[2]
  i2338.anisotropicFiltering = i2339[3]
  i2338.antiAliasing = i2339[4]
  i2338.lodBias = i2339[5]
  i2338.shadowCascades = i2339[6]
  i2338.shadowDistance = i2339[7]
  i2338.shadowmaskMode = i2339[8]
  i2338.shadowProjection = i2339[9]
  i2338.shadowResolution = i2339[10]
  i2338.softParticles = !!i2339[11]
  i2338.softVegetation = !!i2339[12]
  i2338.activeColorSpace = i2339[13]
  i2338.desiredColorSpace = i2339[14]
  i2338.masterTextureLimit = i2339[15]
  i2338.maxQueuedFrames = i2339[16]
  i2338.particleRaycastBudget = i2339[17]
  i2338.pixelLightCount = i2339[18]
  i2338.realtimeReflectionProbes = !!i2339[19]
  i2338.shadowCascade2Split = i2339[20]
  i2338.shadowCascade4Split = new pc.Vec3( i2339[21], i2339[22], i2339[23] )
  i2338.streamingMipmapsActive = !!i2339[24]
  i2338.vSyncCount = i2339[25]
  i2338.asyncUploadBufferSize = i2339[26]
  i2338.asyncUploadTimeSlice = i2339[27]
  i2338.billboardsFaceCameraPosition = !!i2339[28]
  i2338.shadowNearPlaneOffset = i2339[29]
  i2338.streamingMipmapsMemoryBudget = i2339[30]
  i2338.maximumLODLevel = i2339[31]
  i2338.streamingMipmapsAddAllCameras = !!i2339[32]
  i2338.streamingMipmapsMaxLevelReduction = i2339[33]
  i2338.streamingMipmapsRenderersPerFrame = i2339[34]
  i2338.resolutionScalingFixedDPIFactor = i2339[35]
  i2338.streamingMipmapsMaxFileIORequests = i2339[36]
  i2338.currentQualityLevel = i2339[37]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2349 = data
  i2348.weight = i2349[0]
  i2348.vertices = i2349[1]
  i2348.normals = i2349[2]
  i2348.tangents = i2349[3]
  return i2348
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'm_ObjectArgument')
  i2350.m_ObjectArgumentAssemblyTypeName = i2351[2]
  i2350.m_IntArgument = i2351[3]
  i2350.m_FloatArgument = i2351[4]
  i2350.m_StringArgument = i2351[5]
  i2350.m_BoolArgument = !!i2351[6]
  return i2350
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[21],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[57],"65":[57],"66":[57],"67":[57],"68":[57],"69":[57],"70":[21],"71":[3],"72":[73],"74":[73],"12":[11],"75":[11],"76":[3,11],"77":[11,18],"78":[11],"79":[18,11],"80":[3],"81":[18,11],"82":[11],"83":[84],"85":[11],"86":[11],"15":[12],"17":[18,11],"87":[11],"14":[12],"88":[11],"89":[11],"90":[11],"91":[11],"92":[11],"93":[11],"94":[11],"95":[11],"96":[11],"97":[18,11],"98":[11],"99":[11],"100":[11],"101":[11],"102":[18,11],"103":[11],"104":[33],"105":[33],"34":[33],"106":[33],"107":[21],"23":[21],"108":[84],"109":[84]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Game.Scripts.HexSystem.HexPiece","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Game.Scripts.Effects.HexDisappear","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Sprite","Game.Scripts.HexSystem.MergeSystem","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","Game.Scripts.HexSystem.HexGrid","Game.Scripts.HexSystem.HexCell","UnityEngine.BoxCollider","Game.Scripts.Tutorial.TutorialController","UnityEngine.CanvasGroup","Game.Scripts.Packshot.PackshotController","UnityEngine.UI.Button","Game.Scripts.Effects.GlitterMover","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Game.Scripts.InputSystem.HexStackDraggable","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.45f2";

Deserializers.productName = "be-nice-games";

Deserializers.lunaInitializationTime = "11/03/2025 08:26:55";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "test_3D";

Deserializers.lunaAppID = "34181";

Deserializers.projectId = "121aec35b91dfd34b92cb7e975d9df63";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1791";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3807";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.be-nice-games";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "8619cd10-f605-4321-837e-be73273d8523";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

