#pragma once

#include "pch.h"
#include "resource.h"

#if __has_include("codegen/NativeReactNativeIconsDataTypes.g.h")
  #include "codegen/NativeReactNativeIconsDataTypes.g.h"
#endif
#include "codegen/NativeIconsSpec.g.h"

#include "NativeModules.h"

namespace winrt::ReactNativeIcons
{

REACT_MODULE(ReactNativeIcons)
struct ReactNativeIcons
{
  using ModuleSpec = ReactNativeIconsCodegen::IconsSpec;

  REACT_INIT(Initialize)
  void Initialize(React::ReactContext const &reactContext) noexcept;

private:
  React::ReactContext m_context;
};

} // namespace winrt::ReactNativeIcons