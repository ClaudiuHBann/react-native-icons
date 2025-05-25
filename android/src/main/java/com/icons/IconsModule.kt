package com.icons

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = IconsModule.NAME)
class IconsModule(reactContext: ReactApplicationContext) :
  NativeIconsSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "Icons"
  }
}
