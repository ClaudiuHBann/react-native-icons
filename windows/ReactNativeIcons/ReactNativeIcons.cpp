#include "pch.h"

#include "ReactNativeIcons.h"

namespace winrt::ReactNativeIcons
{

// See https://microsoft.github.io/react-native-windows/docs/native-modules for details on writing native modules

void ReactNativeIcons::Initialize(React::ReactContext const &reactContext) noexcept {
  m_context = reactContext;
}

} // namespace winrt::ReactNativeIcons