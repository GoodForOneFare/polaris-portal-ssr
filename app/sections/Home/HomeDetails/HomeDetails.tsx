import * as React from 'react';
import {Page, Frame} from '@shopify/polaris';

interface State {
  isMounted: boolean;
}

export default class HomeDetails extends React.Component<never, State> {
  defaultState = {
    isMounted: true,
  };

  state: State = {
    isMounted: true,
  };

  componentDidMount() {
    this.validateDOMContent();
  }

  render() {
    const globalRibbonMarkup = this.state.isMounted ? '🐸 Ribbon' : null;

    return (
      <Page title="your-app-name">
        <Frame
          topBar=""
          navigation=""
          showMobileNavigation={false}
          onNavigationDismiss={this.handleNavigationDismiss}
          globalRibbon={globalRibbonMarkup}
        >
          Hello world!
        </Frame>
      </Page>
    );
  }

  private handleNavigationDismiss() {}

  private validateDOMContent() {
    const globalRibbons = document.getElementsByClassName(
      'Polaris-Frame__GlobalRibbonContainer',
    );
    if (globalRibbons.length > 1) {
      // eslint-disable-next-line no-console
      console.warn(
        '😭 Multiple instances of .Polaris-Frame__GlobalRibbonContainer exist',
      );
    }

    const expectedGlobaRibbonElement = document.querySelector(
      '.Polaris-Frame > .Polaris-Frame__GlobalRibbonContainer',
    );
    if (expectedGlobaRibbonElement) {
      // eslint-disable-next-line no-console
      console.log(
        '✅ Polaris-Frame contains .Polaris-Frame__GlobalRibbonContainer',
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        '😨 .Polaris-Frame should contain .Polaris-Frame__GlobalRibbonContainer',
      );
    }

    const toastContent = document.querySelectorAll(
      '[data-portal-id*=toast-manager-portal] > *',
    );
    if (
      toastContent[0] &&
      toastContent[0].className === 'Polaris-Frame-ToastManager'
    ) {
      // eslint-disable-next-line no-console
      console.log(
        '✅ toast-manager-portal contains .Polaris-Frame-ToastManager',
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        '😿 toast-manager-portal should contain .Polaris-Frame-ToastManager, but it contains',
        toastContent.length > 0 ? toastContent : 'nothing',
      );
    }
  }
}
