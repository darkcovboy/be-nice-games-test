var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointSpring' )
  var i393 = data
  i392.spring = i393[0]
  i392.damper = i393[1]
  i392.targetPosition = i393[2]
  return i392
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointMotor' )
  var i395 = data
  i394.m_TargetVelocity = i395[0]
  i394.m_Force = i395[1]
  i394.m_FreeSpin = i395[2]
  return i394
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointLimits' )
  var i397 = data
  i396.m_Min = i397[0]
  i396.m_Max = i397[1]
  i396.m_Bounciness = i397[2]
  i396.m_BounceMinVelocity = i397[3]
  i396.m_ContactDistance = i397[4]
  i396.minBounce = i397[5]
  i396.maxBounce = i397[6]
  return i396
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointDrive' )
  var i399 = data
  i398.m_PositionSpring = i399[0]
  i398.m_PositionDamper = i399[1]
  i398.m_MaximumForce = i399[2]
  return i398
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i401 = data
  i400.m_Spring = i401[0]
  i400.m_Damper = i401[1]
  return i400
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i403 = data
  i402.m_Limit = i403[0]
  i402.m_Bounciness = i403[1]
  i402.m_ContactDistance = i403[2]
  return i402
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i405 = data
  i404.m_ExtremumSlip = i405[0]
  i404.m_ExtremumValue = i405[1]
  i404.m_AsymptoteSlip = i405[2]
  i404.m_AsymptoteValue = i405[3]
  i404.m_Stiffness = i405[4]
  return i404
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i407 = data
  i406.m_LowerAngle = i407[0]
  i406.m_UpperAngle = i407[1]
  return i406
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i409 = data
  i408.m_MotorSpeed = i409[0]
  i408.m_MaximumMotorTorque = i409[1]
  return i408
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i411 = data
  i410.m_DampingRatio = i411[0]
  i410.m_Frequency = i411[1]
  i410.m_Angle = i411[2]
  return i410
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i413 = data
  i412.m_LowerTranslation = i413[0]
  i412.m_UpperTranslation = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i415 = data
  i414.position = new pc.Vec3( i415[0], i415[1], i415[2] )
  i414.scale = new pc.Vec3( i415[3], i415[4], i415[5] )
  i414.rotation = new pc.Quat(i415[6], i415[7], i415[8], i415[9])
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'sharedMesh')
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'additionalVertexStreams')
  i418.enabled = !!i419[2]
  request.r(i419[3], i419[4], 0, i418, 'sharedMaterial')
  var i421 = i419[5]
  var i420 = []
  for(var i = 0; i < i421.length; i += 2) {
  request.r(i421[i + 0], i421[i + 1], 2, i420, '')
  }
  i418.sharedMaterials = i420
  i418.receiveShadows = !!i419[6]
  i418.shadowCastingMode = i419[7]
  i418.sortingLayerID = i419[8]
  i418.sortingOrder = i419[9]
  i418.lightmapIndex = i419[10]
  i418.lightmapSceneIndex = i419[11]
  i418.lightmapScaleOffset = new pc.Vec4( i419[12], i419[13], i419[14], i419[15] )
  i418.lightProbeUsage = i419[16]
  i418.reflectionProbeUsage = i419[17]
  return i418
}

Deserializers["Game.Scripts.HexSystem.HexPiece"] = function (request, data, root) {
  var i424 = root || request.c( 'Game.Scripts.HexSystem.HexPiece' )
  var i425 = data
  i424._hexColorType = i425[0]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i427 = data
  i426.name = i427[0]
  i426.tagId = i427[1]
  i426.enabled = !!i427[2]
  i426.isStatic = !!i427[3]
  i426.layer = i427[4]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i429 = data
  i428.name = i429[0]
  i428.halfPrecision = !!i429[1]
  i428.useUInt32IndexFormat = !!i429[2]
  i428.vertexCount = i429[3]
  i428.aabb = i429[4]
  var i431 = i429[5]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( !!i431[i + 0] );
  }
  i428.streams = i430
  i428.vertices = i429[6]
  var i433 = i429[7]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i433[i + 0]) );
  }
  i428.subMeshes = i432
  var i435 = i429[8]
  var i434 = []
  for(var i = 0; i < i435.length; i += 16) {
    i434.push( new pc.Mat4().setData(i435[i + 0], i435[i + 1], i435[i + 2], i435[i + 3],  i435[i + 4], i435[i + 5], i435[i + 6], i435[i + 7],  i435[i + 8], i435[i + 9], i435[i + 10], i435[i + 11],  i435[i + 12], i435[i + 13], i435[i + 14], i435[i + 15]) );
  }
  i428.bindposes = i434
  var i437 = i429[9]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i437[i + 0]) );
  }
  i428.blendShapes = i436
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i443 = data
  i442.triangles = i443[0]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i449 = data
  i448.name = i449[0]
  var i451 = i449[1]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i451[i + 0]) );
  }
  i448.frames = i450
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i452 = root || new pc.UnityMaterial()
  var i453 = data
  i452.name = i453[0]
  request.r(i453[1], i453[2], 0, i452, 'shader')
  i452.renderQueue = i453[3]
  i452.enableInstancing = !!i453[4]
  var i455 = i453[5]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i455[i + 0]) );
  }
  i452.floatParameters = i454
  var i457 = i453[6]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i457[i + 0]) );
  }
  i452.colorParameters = i456
  var i459 = i453[7]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i459[i + 0]) );
  }
  i452.vectorParameters = i458
  var i461 = i453[8]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i461[i + 0]) );
  }
  i452.textureParameters = i460
  var i463 = i453[9]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i463[i + 0]) );
  }
  i452.materialFlags = i462
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Color(i471[1], i471[2], i471[3], i471[4])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i475 = data
  i474.name = i475[0]
  i474.value = new pc.Vec4( i475[1], i475[2], i475[3], i475[4] )
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i479 = data
  i478.name = i479[0]
  request.r(i479[1], i479[2], 0, i478, 'value')
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i483 = data
  i482.name = i483[0]
  i482.enabled = !!i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i485 = data
  i484.name = i485[0]
  i484.width = i485[1]
  i484.height = i485[2]
  i484.mipmapCount = i485[3]
  i484.anisoLevel = i485[4]
  i484.filterMode = i485[5]
  i484.hdr = !!i485[6]
  i484.format = i485[7]
  i484.wrapMode = i485[8]
  i484.alphaIsTransparency = !!i485[9]
  i484.alphaSource = i485[10]
  i484.graphicsFormat = i485[11]
  i484.sRGBTexture = !!i485[12]
  i484.desiredColorSpace = i485[13]
  i484.wrapU = i485[14]
  i484.wrapV = i485[15]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i487 = data
  i486.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i487[0], i486.main)
  i486.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i487[1], i486.colorBySpeed)
  i486.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i487[2], i486.colorOverLifetime)
  i486.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i487[3], i486.emission)
  i486.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i487[4], i486.rotationBySpeed)
  i486.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i487[5], i486.rotationOverLifetime)
  i486.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i487[6], i486.shape)
  i486.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i487[7], i486.sizeBySpeed)
  i486.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i487[8], i486.sizeOverLifetime)
  i486.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i487[9], i486.textureSheetAnimation)
  i486.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i487[10], i486.velocityOverLifetime)
  i486.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i487[11], i486.noise)
  i486.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i487[12], i486.inheritVelocity)
  i486.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i487[13], i486.forceOverLifetime)
  i486.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i487[14], i486.limitVelocityOverLifetime)
  i486.useAutoRandomSeed = !!i487[15]
  i486.randomSeed = i487[16]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemMain()
  var i489 = data
  i488.duration = i489[0]
  i488.loop = !!i489[1]
  i488.prewarm = !!i489[2]
  i488.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.startDelay)
  i488.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[4], i488.startLifetime)
  i488.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[5], i488.startSpeed)
  i488.startSize3D = !!i489[6]
  i488.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[7], i488.startSizeX)
  i488.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[8], i488.startSizeY)
  i488.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[9], i488.startSizeZ)
  i488.startRotation3D = !!i489[10]
  i488.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[11], i488.startRotationX)
  i488.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[12], i488.startRotationY)
  i488.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[13], i488.startRotationZ)
  i488.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i489[14], i488.startColor)
  i488.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[15], i488.gravityModifier)
  i488.simulationSpace = i489[16]
  request.r(i489[17], i489[18], 0, i488, 'customSimulationSpace')
  i488.simulationSpeed = i489[19]
  i488.useUnscaledTime = !!i489[20]
  i488.scalingMode = i489[21]
  i488.playOnAwake = !!i489[22]
  i488.maxParticles = i489[23]
  i488.emitterVelocityMode = i489[24]
  i488.stopAction = i489[25]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i490 = root || new pc.MinMaxCurve()
  var i491 = data
  i490.mode = i491[0]
  i490.curveMin = new pc.AnimationCurve( { keys_flow: i491[1] } )
  i490.curveMax = new pc.AnimationCurve( { keys_flow: i491[2] } )
  i490.curveMultiplier = i491[3]
  i490.constantMin = i491[4]
  i490.constantMax = i491[5]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i492 = root || new pc.MinMaxGradient()
  var i493 = data
  i492.mode = i493[0]
  i492.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i493[1], i492.gradientMin)
  i492.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i493[2], i492.gradientMax)
  i492.colorMin = new pc.Color(i493[3], i493[4], i493[5], i493[6])
  i492.colorMax = new pc.Color(i493[7], i493[8], i493[9], i493[10])
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i495 = data
  i494.mode = i495[0]
  var i497 = i495[1]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i497[i + 0]) );
  }
  i494.colorKeys = i496
  var i499 = i495[2]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i499[i + 0]) );
  }
  i494.alphaKeys = i498
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i500 = root || new pc.ParticleSystemColorBySpeed()
  var i501 = data
  i500.enabled = !!i501[0]
  i500.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i501[1], i500.color)
  i500.range = new pc.Vec2( i501[2], i501[3] )
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i505 = data
  i504.color = new pc.Color(i505[0], i505[1], i505[2], i505[3])
  i504.time = i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i509 = data
  i508.alpha = i509[0]
  i508.time = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i510 = root || new pc.ParticleSystemColorOverLifetime()
  var i511 = data
  i510.enabled = !!i511[0]
  i510.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i511[1], i510.color)
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i512 = root || new pc.ParticleSystemEmitter()
  var i513 = data
  i512.enabled = !!i513[0]
  i512.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[1], i512.rateOverTime)
  i512.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i513[2], i512.rateOverDistance)
  var i515 = i513[3]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i515[i + 0]) );
  }
  i512.bursts = i514
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i518 = root || new pc.ParticleSystemBurst()
  var i519 = data
  i518.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i519[0], i518.count)
  i518.cycleCount = i519[1]
  i518.minCount = i519[2]
  i518.maxCount = i519[3]
  i518.repeatInterval = i519[4]
  i518.time = i519[5]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i520 = root || new pc.ParticleSystemRotationBySpeed()
  var i521 = data
  i520.enabled = !!i521[0]
  i520.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[1], i520.x)
  i520.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[2], i520.y)
  i520.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i521[3], i520.z)
  i520.separateAxes = !!i521[4]
  i520.range = new pc.Vec2( i521[5], i521[6] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemRotationOverLifetime()
  var i523 = data
  i522.enabled = !!i523[0]
  i522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[1], i522.x)
  i522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[2], i522.y)
  i522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.z)
  i522.separateAxes = !!i523[4]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemShape()
  var i525 = data
  i524.enabled = !!i525[0]
  i524.shapeType = i525[1]
  i524.randomDirectionAmount = i525[2]
  i524.sphericalDirectionAmount = i525[3]
  i524.randomPositionAmount = i525[4]
  i524.alignToDirection = !!i525[5]
  i524.radius = i525[6]
  i524.radiusMode = i525[7]
  i524.radiusSpread = i525[8]
  i524.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[9], i524.radiusSpeed)
  i524.radiusThickness = i525[10]
  i524.angle = i525[11]
  i524.length = i525[12]
  i524.boxThickness = new pc.Vec3( i525[13], i525[14], i525[15] )
  i524.meshShapeType = i525[16]
  request.r(i525[17], i525[18], 0, i524, 'mesh')
  request.r(i525[19], i525[20], 0, i524, 'meshRenderer')
  request.r(i525[21], i525[22], 0, i524, 'skinnedMeshRenderer')
  i524.useMeshMaterialIndex = !!i525[23]
  i524.meshMaterialIndex = i525[24]
  i524.useMeshColors = !!i525[25]
  i524.normalOffset = i525[26]
  i524.arc = i525[27]
  i524.arcMode = i525[28]
  i524.arcSpread = i525[29]
  i524.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[30], i524.arcSpeed)
  i524.donutRadius = i525[31]
  i524.position = new pc.Vec3( i525[32], i525[33], i525[34] )
  i524.rotation = new pc.Vec3( i525[35], i525[36], i525[37] )
  i524.scale = new pc.Vec3( i525[38], i525[39], i525[40] )
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemSizeBySpeed()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[1], i526.x)
  i526.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[2], i526.y)
  i526.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i527[3], i526.z)
  i526.separateAxes = !!i527[4]
  i526.range = new pc.Vec2( i527[5], i527[6] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemSizeOverLifetime()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.x)
  i528.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.y)
  i528.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.z)
  i528.separateAxes = !!i529[4]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i530 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i531 = data
  i530.enabled = !!i531[0]
  i530.mode = i531[1]
  i530.animation = i531[2]
  i530.numTilesX = i531[3]
  i530.numTilesY = i531[4]
  i530.useRandomRow = !!i531[5]
  i530.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[6], i530.frameOverTime)
  i530.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i531[7], i530.startFrame)
  i530.cycleCount = i531[8]
  i530.rowIndex = i531[9]
  i530.flipU = i531[10]
  i530.flipV = i531[11]
  i530.spriteCount = i531[12]
  var i533 = i531[13]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sprites = i532
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[1], i536.x)
  i536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.y)
  i536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.z)
  i536.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[4], i536.radial)
  i536.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[5], i536.speedModifier)
  i536.space = i537[6]
  i536.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[7], i536.orbitalX)
  i536.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[8], i536.orbitalY)
  i536.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[9], i536.orbitalZ)
  i536.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[10], i536.orbitalOffsetX)
  i536.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[11], i536.orbitalOffsetY)
  i536.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[12], i536.orbitalOffsetZ)
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemNoise()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.separateAxes = !!i539[1]
  i538.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.strengthX)
  i538.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.strengthY)
  i538.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[4], i538.strengthZ)
  i538.frequency = i539[5]
  i538.damping = !!i539[6]
  i538.octaveCount = i539[7]
  i538.octaveMultiplier = i539[8]
  i538.octaveScale = i539[9]
  i538.quality = i539[10]
  i538.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[11], i538.scrollSpeed)
  i538.scrollSpeedMultiplier = i539[12]
  i538.remapEnabled = !!i539[13]
  i538.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[14], i538.remapX)
  i538.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[15], i538.remapY)
  i538.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[16], i538.remapZ)
  i538.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[17], i538.positionAmount)
  i538.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[18], i538.rotationAmount)
  i538.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[19], i538.sizeAmount)
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemInheritVelocity()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.mode = i541[1]
  i540.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[2], i540.curve)
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemForceOverLifetime()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[1], i542.x)
  i542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[2], i542.y)
  i542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[3], i542.z)
  i542.space = i543[4]
  i542.randomized = !!i543[5]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[1], i544.limit)
  i544.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[2], i544.limitX)
  i544.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[3], i544.limitY)
  i544.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[4], i544.limitZ)
  i544.dampen = i545[5]
  i544.separateAxes = !!i545[6]
  i544.space = i545[7]
  i544.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[8], i544.drag)
  i544.multiplyDragByParticleSize = !!i545[9]
  i544.multiplyDragByParticleVelocity = !!i545[10]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'mesh')
  i546.meshCount = i547[2]
  i546.activeVertexStreamsCount = i547[3]
  i546.alignment = i547[4]
  i546.renderMode = i547[5]
  i546.sortMode = i547[6]
  i546.lengthScale = i547[7]
  i546.velocityScale = i547[8]
  i546.cameraVelocityScale = i547[9]
  i546.normalDirection = i547[10]
  i546.sortingFudge = i547[11]
  i546.minParticleSize = i547[12]
  i546.maxParticleSize = i547[13]
  i546.pivot = new pc.Vec3( i547[14], i547[15], i547[16] )
  request.r(i547[17], i547[18], 0, i546, 'trailMaterial')
  i546.applyActiveColorSpace = !!i547[19]
  i546.enabled = !!i547[20]
  request.r(i547[21], i547[22], 0, i546, 'sharedMaterial')
  var i549 = i547[23]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.sharedMaterials = i548
  i546.receiveShadows = !!i547[24]
  i546.shadowCastingMode = i547[25]
  i546.sortingLayerID = i547[26]
  i546.sortingOrder = i547[27]
  i546.lightmapIndex = i547[28]
  i546.lightmapSceneIndex = i547[29]
  i546.lightmapScaleOffset = new pc.Vec4( i547[30], i547[31], i547[32], i547[33] )
  i546.lightProbeUsage = i547[34]
  i546.reflectionProbeUsage = i547[35]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i551 = data
  i550.pivot = new pc.Vec2( i551[0], i551[1] )
  i550.anchorMin = new pc.Vec2( i551[2], i551[3] )
  i550.anchorMax = new pc.Vec2( i551[4], i551[5] )
  i550.sizeDelta = new pc.Vec2( i551[6], i551[7] )
  i550.anchoredPosition3D = new pc.Vec3( i551[8], i551[9], i551[10] )
  i550.rotation = new pc.Quat(i551[11], i551[12], i551[13], i551[14])
  i550.scale = new pc.Vec3( i551[15], i551[16], i551[17] )
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i553 = data
  i552.planeDistance = i553[0]
  i552.referencePixelsPerUnit = i553[1]
  i552.isFallbackOverlay = !!i553[2]
  i552.renderMode = i553[3]
  i552.renderOrder = i553[4]
  i552.sortingLayerName = i553[5]
  i552.sortingOrder = i553[6]
  i552.scaleFactor = i553[7]
  request.r(i553[8], i553[9], 0, i552, 'worldCamera')
  i552.overrideSorting = !!i553[10]
  i552.pixelPerfect = !!i553[11]
  i552.targetDisplay = i553[12]
  i552.overridePixelPerfect = !!i553[13]
  i552.enabled = !!i553[14]
  return i552
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i555 = data
  i554.m_UiScaleMode = i555[0]
  i554.m_ReferencePixelsPerUnit = i555[1]
  i554.m_ScaleFactor = i555[2]
  i554.m_ReferenceResolution = new pc.Vec2( i555[3], i555[4] )
  i554.m_ScreenMatchMode = i555[5]
  i554.m_MatchWidthOrHeight = i555[6]
  i554.m_PhysicalUnit = i555[7]
  i554.m_FallbackScreenDPI = i555[8]
  i554.m_DefaultSpriteDPI = i555[9]
  i554.m_DynamicPixelsPerUnit = i555[10]
  i554.m_PresetInfoIsWorld = !!i555[11]
  return i554
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i557 = data
  i556.m_IgnoreReversedGraphics = !!i557[0]
  i556.m_BlockingObjects = i557[1]
  i556.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i557[2] )
  return i556
}

Deserializers["Game.Scripts.Effects.HexDisappear"] = function (request, data, root) {
  var i558 = root || request.c( 'Game.Scripts.Effects.HexDisappear' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, '_mergeSystem')
  var i561 = i559[2]
  var i560 = []
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 2, i560, '')
  }
  i558._hexes = i560
  var i563 = i559[3]
  var i562 = []
  for(var i = 0; i < i563.length; i += 4) {
    i562.push( new pc.Color(i563[i + 0], i563[i + 1], i563[i + 2], i563[i + 3]) );
  }
  i558._colors = i562
  i558._maxScale = i559[4]
  i558._delayBetweenHexes = i559[5]
  i558._pulseDuration = i559[6]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i569 = data
  i568.cullTransparentMesh = !!i569[0]
  return i568
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.UI.Image' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'm_Sprite')
  i570.m_Type = i571[2]
  i570.m_PreserveAspect = !!i571[3]
  i570.m_FillCenter = !!i571[4]
  i570.m_FillMethod = i571[5]
  i570.m_FillAmount = i571[6]
  i570.m_FillClockwise = !!i571[7]
  i570.m_FillOrigin = i571[8]
  i570.m_UseSpriteMesh = !!i571[9]
  i570.m_PixelsPerUnitMultiplier = i571[10]
  i570.m_Maskable = !!i571[11]
  request.r(i571[12], i571[13], 0, i570, 'm_Material')
  i570.m_Color = new pc.Color(i571[14], i571[15], i571[16], i571[17])
  i570.m_RaycastTarget = !!i571[18]
  i570.m_RaycastPadding = new pc.Vec4( i571[19], i571[20], i571[21], i571[22] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i573 = data
  i572.name = i573[0]
  i572.atlasId = i573[1]
  i572.mipmapCount = i573[2]
  i572.hdr = !!i573[3]
  i572.size = i573[4]
  i572.anisoLevel = i573[5]
  i572.filterMode = i573[6]
  var i575 = i573[7]
  var i574 = []
  for(var i = 0; i < i575.length; i += 4) {
    i574.push( UnityEngine.Rect.MinMaxRect(i575[i + 0], i575[i + 1], i575[i + 2], i575[i + 3]) );
  }
  i572.rects = i574
  i572.wrapU = i573[8]
  i572.wrapV = i573[9]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i579 = data
  i578.name = i579[0]
  i578.index = i579[1]
  i578.startup = !!i579[2]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i581 = data
  i580.aspect = i581[0]
  i580.orthographic = !!i581[1]
  i580.orthographicSize = i581[2]
  i580.backgroundColor = new pc.Color(i581[3], i581[4], i581[5], i581[6])
  i580.nearClipPlane = i581[7]
  i580.farClipPlane = i581[8]
  i580.fieldOfView = i581[9]
  i580.depth = i581[10]
  i580.clearFlags = i581[11]
  i580.cullingMask = i581[12]
  i580.rect = i581[13]
  request.r(i581[14], i581[15], 0, i580, 'targetTexture')
  i580.usePhysicalProperties = !!i581[16]
  i580.focalLength = i581[17]
  i580.sensorSize = new pc.Vec2( i581[18], i581[19] )
  i580.lensShift = new pc.Vec2( i581[20], i581[21] )
  i580.gateFit = i581[22]
  i580.commandBufferCount = i581[23]
  i580.cameraType = i581[24]
  i580.enabled = !!i581[25]
  return i580
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i583 = data
  i582.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i583[0] )
  i582.m_MaxRayIntersections = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i585 = data
  i584.type = i585[0]
  i584.color = new pc.Color(i585[1], i585[2], i585[3], i585[4])
  i584.cullingMask = i585[5]
  i584.intensity = i585[6]
  i584.range = i585[7]
  i584.spotAngle = i585[8]
  i584.shadows = i585[9]
  i584.shadowNormalBias = i585[10]
  i584.shadowBias = i585[11]
  i584.shadowStrength = i585[12]
  i584.shadowResolution = i585[13]
  i584.lightmapBakeType = i585[14]
  i584.renderMode = i585[15]
  request.r(i585[16], i585[17], 0, i584, 'cookie')
  i584.cookieSize = i585[18]
  i584.enabled = !!i585[19]
  return i584
}

Deserializers["Game.Scripts.HexSystem.HexGrid"] = function (request, data, root) {
  var i586 = root || request.c( 'Game.Scripts.HexSystem.HexGrid' )
  var i587 = data
  var i589 = i587[0]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('Game.Scripts.HexSystem.HexCell')))
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 1, i588, '')
  }
  i586._cells = i588
  return i586
}

Deserializers["Game.Scripts.HexSystem.HexCell"] = function (request, data, root) {
  var i592 = root || request.c( 'Game.Scripts.HexSystem.HexCell' )
  var i593 = data
  i592._q = i593[0]
  i592._r = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i595 = data
  i594.center = new pc.Vec3( i595[0], i595[1], i595[2] )
  i594.size = new pc.Vec3( i595[3], i595[4], i595[5] )
  i594.enabled = !!i595[6]
  i594.isTrigger = !!i595[7]
  request.r(i595[8], i595[9], 0, i594, 'material')
  return i594
}

Deserializers["Game.Scripts.Tutorial.TutorialController"] = function (request, data, root) {
  var i596 = root || request.c( 'Game.Scripts.Tutorial.TutorialController' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, '_overlayGroup')
  request.r(i597[2], i597[3], 0, i596, '_holeMask')
  request.r(i597[4], i597[5], 0, i596, '_handPointer')
  request.r(i597[6], i597[7], 0, i596, '_mainCamera')
  request.r(i597[8], i597[9], 0, i596, '_stackTransform')
  request.r(i597[10], i597[11], 0, i596, '_targetCellTransform')
  i596._fadeDuration = i597[12]
  i596._moveDuration = i597[13]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i599 = data
  i598.m_Alpha = i599[0]
  i598.m_Interactable = !!i599[1]
  i598.m_BlocksRaycasts = !!i599[2]
  i598.m_IgnoreParentGroups = !!i599[3]
  i598.enabled = !!i599[4]
  return i598
}

Deserializers["Game.Scripts.Packshot.PackshotController"] = function (request, data, root) {
  var i600 = root || request.c( 'Game.Scripts.Packshot.PackshotController' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, '_canvasGroup')
  request.r(i601[2], i601[3], 0, i600, '_button')
  request.r(i601[4], i601[5], 0, i600, '_mergeSystem')
  i600._fadeDuration = i601[6]
  i600._storeUrl = i601[7]
  return i600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.UI.Button' )
  var i603 = data
  i602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i603[0], i602.m_OnClick)
  i602.m_Navigation = request.d('UnityEngine.UI.Navigation', i603[1], i602.m_Navigation)
  i602.m_Transition = i603[2]
  i602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i603[3], i602.m_Colors)
  i602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i603[4], i602.m_SpriteState)
  i602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i603[5], i602.m_AnimationTriggers)
  i602.m_Interactable = !!i603[6]
  request.r(i603[7], i603[8], 0, i602, 'm_TargetGraphic')
  return i602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i605 = data
  i604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i605[0], i604.m_PersistentCalls)
  return i604
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i607 = data
  var i609 = i607[0]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i609.length; i += 1) {
    i608.add(request.d('UnityEngine.Events.PersistentCall', i609[i + 0]));
  }
  i606.m_Calls = i608
  return i606
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'm_Target')
  i612.m_TargetAssemblyTypeName = i613[2]
  i612.m_MethodName = i613[3]
  i612.m_Mode = i613[4]
  i612.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i613[5], i612.m_Arguments)
  i612.m_CallState = i613[6]
  return i612
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i615 = data
  i614.m_Mode = i615[0]
  i614.m_WrapAround = !!i615[1]
  request.r(i615[2], i615[3], 0, i614, 'm_SelectOnUp')
  request.r(i615[4], i615[5], 0, i614, 'm_SelectOnDown')
  request.r(i615[6], i615[7], 0, i614, 'm_SelectOnLeft')
  request.r(i615[8], i615[9], 0, i614, 'm_SelectOnRight')
  return i614
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i617 = data
  i616.m_NormalColor = new pc.Color(i617[0], i617[1], i617[2], i617[3])
  i616.m_HighlightedColor = new pc.Color(i617[4], i617[5], i617[6], i617[7])
  i616.m_PressedColor = new pc.Color(i617[8], i617[9], i617[10], i617[11])
  i616.m_SelectedColor = new pc.Color(i617[12], i617[13], i617[14], i617[15])
  i616.m_DisabledColor = new pc.Color(i617[16], i617[17], i617[18], i617[19])
  i616.m_ColorMultiplier = i617[20]
  i616.m_FadeDuration = i617[21]
  return i616
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_HighlightedSprite')
  request.r(i619[2], i619[3], 0, i618, 'm_PressedSprite')
  request.r(i619[4], i619[5], 0, i618, 'm_SelectedSprite')
  request.r(i619[6], i619[7], 0, i618, 'm_DisabledSprite')
  return i618
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i621 = data
  i620.m_NormalTrigger = i621[0]
  i620.m_HighlightedTrigger = i621[1]
  i620.m_PressedTrigger = i621[2]
  i620.m_SelectedTrigger = i621[3]
  i620.m_DisabledTrigger = i621[4]
  return i620
}

Deserializers["Game.Scripts.HexSystem.MergeSystem"] = function (request, data, root) {
  var i622 = root || request.c( 'Game.Scripts.HexSystem.MergeSystem' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, '_grid')
  i622._moveDuration = i623[2]
  i622._maxStack = i623[3]
  return i622
}

Deserializers["Game.Scripts.Effects.GlitterMover"] = function (request, data, root) {
  var i624 = root || request.c( 'Game.Scripts.Effects.GlitterMover' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, '_mergeSystem')
  request.r(i625[2], i625[3], 0, i624, '_particleSystem')
  return i624
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_FirstSelected')
  i626.m_sendNavigationEvents = !!i627[2]
  i626.m_DragThreshold = i627[3]
  return i626
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i629 = data
  i628.m_HorizontalAxis = i629[0]
  i628.m_VerticalAxis = i629[1]
  i628.m_SubmitButton = i629[2]
  i628.m_CancelButton = i629[3]
  i628.m_InputActionsPerSecond = i629[4]
  i628.m_RepeatDelay = i629[5]
  i628.m_ForceModuleActive = !!i629[6]
  i628.m_SendPointerHoverToParent = !!i629[7]
  return i628
}

Deserializers["Game.Scripts.InputSystem.HexStackDraggable"] = function (request, data, root) {
  var i630 = root || request.c( 'Game.Scripts.InputSystem.HexStackDraggable' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, '_tutorialController')
  var i633 = i631[2]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630._hexPieces = i632
  i630._layerMask = UnityEngine.LayerMask.FromIntegerValue( i631[3] )
  request.r(i631[4], i631[5], 0, i630, '_camera')
  i630._liftHeight = i631[6]
  i630._returnDuration = i631[7]
  request.r(i631[8], i631[9], 0, i630, '_mergeSystem')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i637 = data
  i636.ambientIntensity = i637[0]
  i636.reflectionIntensity = i637[1]
  i636.ambientMode = i637[2]
  i636.ambientLight = new pc.Color(i637[3], i637[4], i637[5], i637[6])
  i636.ambientSkyColor = new pc.Color(i637[7], i637[8], i637[9], i637[10])
  i636.ambientGroundColor = new pc.Color(i637[11], i637[12], i637[13], i637[14])
  i636.ambientEquatorColor = new pc.Color(i637[15], i637[16], i637[17], i637[18])
  i636.fogColor = new pc.Color(i637[19], i637[20], i637[21], i637[22])
  i636.fogEndDistance = i637[23]
  i636.fogStartDistance = i637[24]
  i636.fogDensity = i637[25]
  i636.fog = !!i637[26]
  request.r(i637[27], i637[28], 0, i636, 'skybox')
  i636.fogMode = i637[29]
  var i639 = i637[30]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i639[i + 0]) );
  }
  i636.lightmaps = i638
  i636.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i637[31], i636.lightProbes)
  i636.lightmapsMode = i637[32]
  i636.mixedBakeMode = i637[33]
  i636.environmentLightingMode = i637[34]
  i636.ambientProbe = new pc.SphericalHarmonicsL2(i637[35])
  i636.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i637[36])
  i636.useReferenceAmbientProbe = !!i637[37]
  request.r(i637[38], i637[39], 0, i636, 'customReflection')
  request.r(i637[40], i637[41], 0, i636, 'defaultReflection')
  i636.defaultReflectionMode = i637[42]
  i636.defaultReflectionResolution = i637[43]
  i636.sunLightObjectId = i637[44]
  i636.pixelLightCount = i637[45]
  i636.defaultReflectionHDR = !!i637[46]
  i636.hasLightDataAsset = !!i637[47]
  i636.hasManualGenerate = !!i637[48]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'lightmapColor')
  request.r(i643[2], i643[3], 0, i642, 'lightmapDirection')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i644 = root || new UnityEngine.LightProbes()
  var i645 = data
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i653 = data
  var i655 = i653[0]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i655.length; i += 1) {
    i654.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i655[i + 0]));
  }
  i652.ShaderCompilationErrors = i654
  i652.name = i653[1]
  i652.guid = i653[2]
  var i657 = i653[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( i657[i + 0] );
  }
  i652.shaderDefinedKeywords = i656
  var i659 = i653[4]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i659[i + 0]) );
  }
  i652.passes = i658
  var i661 = i653[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i661[i + 0]) );
  }
  i652.usePasses = i660
  var i663 = i653[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i663[i + 0]) );
  }
  i652.defaultParameterValues = i662
  request.r(i653[7], i653[8], 0, i652, 'unityFallbackShader')
  i652.readDepth = !!i653[9]
  i652.isCreatedByShaderGraph = !!i653[10]
  i652.disableBatching = !!i653[11]
  i652.compiled = !!i653[12]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i667 = data
  i666.shaderName = i667[0]
  i666.errorMessage = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i672 = root || new pc.UnityShaderPass()
  var i673 = data
  i672.id = i673[0]
  i672.subShaderIndex = i673[1]
  i672.name = i673[2]
  i672.passType = i673[3]
  i672.grabPassTextureName = i673[4]
  i672.usePass = !!i673[5]
  i672.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[6], i672.zTest)
  i672.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[7], i672.zWrite)
  i672.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[8], i672.culling)
  i672.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i673[9], i672.blending)
  i672.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i673[10], i672.alphaBlending)
  i672.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[11], i672.colorWriteMask)
  i672.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[12], i672.offsetUnits)
  i672.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[13], i672.offsetFactor)
  i672.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[14], i672.stencilRef)
  i672.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[15], i672.stencilReadMask)
  i672.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i673[16], i672.stencilWriteMask)
  i672.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[17], i672.stencilOp)
  i672.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[18], i672.stencilOpFront)
  i672.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i673[19], i672.stencilOpBack)
  var i675 = i673[20]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i675[i + 0]) );
  }
  i672.tags = i674
  var i677 = i673[21]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( i677[i + 0] );
  }
  i672.passDefinedKeywords = i676
  var i679 = i673[22]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i679[i + 0]) );
  }
  i672.passDefinedKeywordGroups = i678
  var i681 = i673[23]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i681[i + 0]) );
  }
  i672.variants = i680
  var i683 = i673[24]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i683[i + 0]) );
  }
  i672.excludedVariants = i682
  i672.hasDepthReader = !!i673[25]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i685 = data
  i684.val = i685[0]
  i684.name = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i687 = data
  i686.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[0], i686.src)
  i686.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[1], i686.dst)
  i686.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i687[2], i686.op)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i689 = data
  i688.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[0], i688.pass)
  i688.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[1], i688.fail)
  i688.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[2], i688.zFail)
  i688.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i689[3], i688.comp)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i693 = data
  i692.name = i693[0]
  i692.value = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.hasDiscard = !!i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i703 = data
  i702.passId = i703[0]
  i702.subShaderIndex = i703[1]
  var i705 = i703[2]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i702.keywords = i704
  i702.vertexProgram = i703[3]
  i702.fragmentProgram = i703[4]
  i702.exportedForWebGl2 = !!i703[5]
  i702.readDepth = !!i703[6]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'shader')
  i708.pass = i709[2]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i713 = data
  i712.name = i713[0]
  i712.type = i713[1]
  i712.value = new pc.Vec4( i713[2], i713[3], i713[4], i713[5] )
  i712.textureValue = i713[6]
  i712.shaderPropertyFlag = i713[7]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i715 = data
  i714.name = i715[0]
  request.r(i715[1], i715[2], 0, i714, 'texture')
  i714.aabb = i715[3]
  i714.vertices = i715[4]
  i714.triangles = i715[5]
  i714.textureRect = UnityEngine.Rect.MinMaxRect(i715[6], i715[7], i715[8], i715[9])
  i714.packedRect = UnityEngine.Rect.MinMaxRect(i715[10], i715[11], i715[12], i715[13])
  i714.border = new pc.Vec4( i715[14], i715[15], i715[16], i715[17] )
  i714.transparency = i715[18]
  i714.bounds = i715[19]
  i714.pixelsPerUnit = i715[20]
  i714.textureWidth = i715[21]
  i714.textureHeight = i715[22]
  i714.nativeSize = new pc.Vec2( i715[23], i715[24] )
  i714.pivot = new pc.Vec2( i715[25], i715[26] )
  i714.textureRectOffset = new pc.Vec2( i715[27], i715[28] )
  return i714
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i716 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i717 = data
  i716.useSafeMode = !!i717[0]
  i716.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i717[1], i716.safeModeOptions)
  i716.timeScale = i717[2]
  i716.unscaledTimeScale = i717[3]
  i716.useSmoothDeltaTime = !!i717[4]
  i716.maxSmoothUnscaledTime = i717[5]
  i716.rewindCallbackMode = i717[6]
  i716.showUnityEditorReport = !!i717[7]
  i716.logBehaviour = i717[8]
  i716.drawGizmos = !!i717[9]
  i716.defaultRecyclable = !!i717[10]
  i716.defaultAutoPlay = i717[11]
  i716.defaultUpdateType = i717[12]
  i716.defaultTimeScaleIndependent = !!i717[13]
  i716.defaultEaseType = i717[14]
  i716.defaultEaseOvershootOrAmplitude = i717[15]
  i716.defaultEasePeriod = i717[16]
  i716.defaultAutoKill = !!i717[17]
  i716.defaultLoopType = i717[18]
  i716.debugMode = !!i717[19]
  i716.debugStoreTargetId = !!i717[20]
  i716.showPreviewPanel = !!i717[21]
  i716.storeSettingsLocation = i717[22]
  i716.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i717[23], i716.modules)
  i716.createASMDEF = !!i717[24]
  i716.showPlayingTweens = !!i717[25]
  i716.showPausedTweens = !!i717[26]
  return i716
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i718 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i719 = data
  i718.logBehaviour = i719[0]
  i718.nestedTweenFailureBehaviour = i719[1]
  return i718
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i720 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i721 = data
  i720.showPanel = !!i721[0]
  i720.audioEnabled = !!i721[1]
  i720.physicsEnabled = !!i721[2]
  i720.physics2DEnabled = !!i721[3]
  i720.spriteEnabled = !!i721[4]
  i720.uiEnabled = !!i721[5]
  i720.textMeshProEnabled = !!i721[6]
  i720.tk2DEnabled = !!i721[7]
  i720.deAudioEnabled = !!i721[8]
  i720.deUnityExtendedEnabled = !!i721[9]
  i720.epoOutlineEnabled = !!i721[10]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i723 = data
  var i725 = i723[0]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i725[i + 0]) );
  }
  i722.files = i724
  i722.componentToPrefabIds = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i729 = data
  i728.path = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'unityObject')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i731 = data
  var i733 = i731[0]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i733[i + 0]) );
  }
  i730.scriptsExecutionOrder = i732
  var i735 = i731[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i735[i + 0]) );
  }
  i730.sortingLayers = i734
  var i737 = i731[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i737[i + 0]) );
  }
  i730.cullingLayers = i736
  i730.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i731[3], i730.timeSettings)
  i730.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i731[4], i730.physicsSettings)
  i730.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i731[5], i730.physics2DSettings)
  i730.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i731[6], i730.qualitySettings)
  i730.enableRealtimeShadows = !!i731[7]
  i730.enableAutoInstancing = !!i731[8]
  i730.enableStaticBatching = !!i731[9]
  i730.enableDynamicBatching = !!i731[10]
  i730.lightmapEncodingQuality = i731[11]
  i730.desiredColorSpace = i731[12]
  var i739 = i731[13]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i730.allTags = i738
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i743 = data
  i742.name = i743[0]
  i742.value = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i747 = data
  i746.id = i747[0]
  i746.name = i747[1]
  i746.value = i747[2]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i751 = data
  i750.id = i751[0]
  i750.name = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i753 = data
  i752.fixedDeltaTime = i753[0]
  i752.maximumDeltaTime = i753[1]
  i752.timeScale = i753[2]
  i752.maximumParticleTimestep = i753[3]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i755 = data
  i754.gravity = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.defaultSolverIterations = i755[3]
  i754.bounceThreshold = i755[4]
  i754.autoSyncTransforms = !!i755[5]
  i754.autoSimulation = !!i755[6]
  var i757 = i755[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i757[i + 0]) );
  }
  i754.collisionMatrix = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i761 = data
  i760.enabled = !!i761[0]
  i760.layerId = i761[1]
  i760.otherLayerId = i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'material')
  i762.gravity = new pc.Vec2( i763[2], i763[3] )
  i762.positionIterations = i763[4]
  i762.velocityIterations = i763[5]
  i762.velocityThreshold = i763[6]
  i762.maxLinearCorrection = i763[7]
  i762.maxAngularCorrection = i763[8]
  i762.maxTranslationSpeed = i763[9]
  i762.maxRotationSpeed = i763[10]
  i762.baumgarteScale = i763[11]
  i762.baumgarteTOIScale = i763[12]
  i762.timeToSleep = i763[13]
  i762.linearSleepTolerance = i763[14]
  i762.angularSleepTolerance = i763[15]
  i762.defaultContactOffset = i763[16]
  i762.autoSimulation = !!i763[17]
  i762.queriesHitTriggers = !!i763[18]
  i762.queriesStartInColliders = !!i763[19]
  i762.callbacksOnDisable = !!i763[20]
  i762.reuseCollisionCallbacks = !!i763[21]
  i762.autoSyncTransforms = !!i763[22]
  var i765 = i763[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i765[i + 0]) );
  }
  i762.collisionMatrix = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i769 = data
  i768.enabled = !!i769[0]
  i768.layerId = i769[1]
  i768.otherLayerId = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i773[i + 0]) );
  }
  i770.qualityLevels = i772
  var i775 = i771[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i770.names = i774
  i770.shadows = i771[2]
  i770.anisotropicFiltering = i771[3]
  i770.antiAliasing = i771[4]
  i770.lodBias = i771[5]
  i770.shadowCascades = i771[6]
  i770.shadowDistance = i771[7]
  i770.shadowmaskMode = i771[8]
  i770.shadowProjection = i771[9]
  i770.shadowResolution = i771[10]
  i770.softParticles = !!i771[11]
  i770.softVegetation = !!i771[12]
  i770.activeColorSpace = i771[13]
  i770.desiredColorSpace = i771[14]
  i770.masterTextureLimit = i771[15]
  i770.maxQueuedFrames = i771[16]
  i770.particleRaycastBudget = i771[17]
  i770.pixelLightCount = i771[18]
  i770.realtimeReflectionProbes = !!i771[19]
  i770.shadowCascade2Split = i771[20]
  i770.shadowCascade4Split = new pc.Vec3( i771[21], i771[22], i771[23] )
  i770.streamingMipmapsActive = !!i771[24]
  i770.vSyncCount = i771[25]
  i770.asyncUploadBufferSize = i771[26]
  i770.asyncUploadTimeSlice = i771[27]
  i770.billboardsFaceCameraPosition = !!i771[28]
  i770.shadowNearPlaneOffset = i771[29]
  i770.streamingMipmapsMemoryBudget = i771[30]
  i770.maximumLODLevel = i771[31]
  i770.streamingMipmapsAddAllCameras = !!i771[32]
  i770.streamingMipmapsMaxLevelReduction = i771[33]
  i770.streamingMipmapsRenderersPerFrame = i771[34]
  i770.resolutionScalingFixedDPIFactor = i771[35]
  i770.streamingMipmapsMaxFileIORequests = i771[36]
  i770.currentQualityLevel = i771[37]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i781 = data
  i780.weight = i781[0]
  i780.vertices = i781[1]
  i780.normals = i781[2]
  i780.tangents = i781[3]
  return i780
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_ObjectArgument')
  i782.m_ObjectArgumentAssemblyTypeName = i783[2]
  i782.m_IntArgument = i783[3]
  i782.m_FloatArgument = i783[4]
  i782.m_StringArgument = i783[5]
  i782.m_BoolArgument = !!i783[6]
  return i782
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

Deserializers.creativeName = "";

Deserializers.lunaAppID = "34179";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3808";

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

Deserializers.buildID = "a51100bf-0bcc-4872-8dae-d34d54e4dec5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

