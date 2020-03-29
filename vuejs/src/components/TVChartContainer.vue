<template>
<div class="TVChartContainer" :id="containerId" />
</template>

<script>

//TradingView Charting Library
import * as TradingView from '../../public/charting_library/charting_library.min.js'; //NOTE: remember update libraryPath if if not in 'public/charting_library/charting_library.min.js'

// import {UDFCompatibleDatafeed} from './datafeeds/udf/dist/bundle.js'; //precompiled datafeed
import {UDFCompatibleDatafeed} from './datafeeds/udf/src/udf-compatible-datafeed.js';

import {BrokerSample} from './broker-sample/dist/bundle.js';

// import './datafeeds/udf/dist/polyfills.js' //precompiled polyfills, no need npm install
// import './datafeeds/udf/src/polyfills.es6' //need to run npm install promise-polyfill whatwg-fetch

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
      
export default {
  name: 'TVChartContainer',
  props: {
    symbol: {
      default: 'AAPL',
      type: String,
    },
    interval: {
      default: 'D',
      type: String,
    },
    containerId: {
      default: 'tv_chart_container',
      type: String,
    },
    datafeedUrl: {
      default: 'https://demo_feed.tradingview.com',
      type: String,
    },
    libraryPath: {
      default: '/charting_library/', //NOTE: change this if not in 'public/charting_library/charting_library.min.js' required to access static files
      type: String,
    },
    chartsStorageUrl: {
      default: 'https://saveload.tradingview.com',
      type: String,
    },
    chartsStorageApiVersion: {
      default: '1.1',
      type: String,
    },
    clientId: {
      default: 'tradingview.com',
      type: String,
    },
    userId: {
      default: 'public_user_id',
      type: String,
    },
    fullscreen: {
      default: false,
      type: Boolean,
    },
    autosize: {
      default: true,
      type: Boolean,
    },
    studiesOverrides: {
      type: Object,
    }
  },
  tvWidget: null,
  mounted() {
    var datafeed = new UDFCompatibleDatafeed(this.datafeedUrl)
    const widgetOptions = {
      symbol: this.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: datafeed,
      interval: this.interval,
      container_id: this.containerId,
      library_path: this.libraryPath,

      locale: getLanguageFromURL() || 'en',
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates', 'dome_widget'],
      charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: this.studiesOverrides,

      theme: getParameterByName('theme'),
      
      
					widgetbar: {
						details: true,
						news: true,
						watchlist: true,
						watchlist_settings: {
							default_symbols: ["MSFT", "IBM", "AAPL"]
						}
					},

					rss_news_feed: {
						"default": [ {
							url: "https://demo_feed.tradingview.com/news?symbol={SYMBOL}",
							name: "Yahoo Finance"
						} ]
					},

					brokerFactory: function(host) { return new BrokerSample(host, datafeed); },
					brokerConfig: {
						configFlags: {
							supportBottomWidget: true,
							supportNativeReversePosition: true,
							supportClosePosition: true,
							supportPLUpdate: true,
							supportLevel2Data: false,
							showQuantityInsteadOfAmount: true,
							supportEditAmount: false,
						},
						durations: [
							{ name: 'DAY', value: 'DAY' },
							{ name: 'GTC', value: 'GTC' },
						],
						orderDialogOptions: {
							customFields: [
								{
									id: '2410',
									inputType: 'ComboBox',
									title: 'Execution',
									items: [
										{
											text: 'General',
											value: 'General',
										},
										{
											text: 'Iceberg',
											value: 'Iceberg',
										},
										{
											text: 'AOL',
											value: 'AOL',
										},
									],
								},
							],
						},
					},
    };


    // eslint-disable-next-line no-console
    console.log('TradingView version: ', TradingView.version())

    const tvWidget = new TradingView.widget(widgetOptions);
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton();

        button.setAttribute('title', 'Click to show a notification popup');
        button.classList.add('apply-common-tooltip');

        button.addEventListener('click', () => tvWidget.showNoticeDialog({
            title: 'Notification',
            body: 'TradingView Charting Library API works correctly',
            callback: () => {
              // eslint-disable-next-line no-console
              console.log('Noticed!');
            },
          }));

        button.innerHTML = 'Check API';
      });
    });
  },
  destroyed() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
