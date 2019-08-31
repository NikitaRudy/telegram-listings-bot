function StickyBlock(element, options) {
    var self = this;

    this.paddingForSticking = options.paddingForSticking || 5;
    this.topBottomContainerPaddings = options.topBottomContainerPaddings || 0;

    this.$block = $(element);
    this.blockHeight = options.blockHeight;

    this.$bottomStickBoundElement = options.bottomStickBoundElement ? $(options.bottomStickBoundElement) : null;
    this.$bottomStickBoundContainer = options.bottomStickBoundContainer ? $(options.bottomStickBoundContainer) : null;
    this.$upperStickBoundElement = options.upperStickBoundElement ? $(options.upperStickBoundElement) : null;
    this.$upperStickBoundContainer = options.upperStickBoundContainer ? $(options.upperStickBoundContainer) : null;

    this.$leftStickBoundElement = options.leftStickBoundElement ? $(options.leftStickBoundElement) : null;

    this.layoutConfig = options.layoutConfig;

    this.$block.width(this.$block.parent().width());

    this.isTopSticked = ko.observable(false);
    this.isBottomSticked = ko.observable(false);
    this.topOffset = ko.observable(0);

    window.onscroll = function () {
        if (!self._isEnoughSpace()) {
            return;
        }

        self._fixPosition();
    };

    window.onresize = function () {
        self.isTopSticked(self._isTopSticked());
        self.isBottomSticked(self._isBottomSticked());
        self.topOffset(self._getTopPosition());

        self.initialOffsetTop = self._getUpperBound();

        if (self.$leftStickBoundElement) {
            self.layoutConfig.topSticked.left = self._getLeftBoundOffset();
            self.layoutConfig.bottomSticked.left = self._getLeftBoundPosition();
            self._fixPosition();
        }

        self.$block.width(self.$block.parent().width());
    };

    if (this._isEnoughSpace()) {
        this._fixPosition();

        this.isTopSticked(this._isTopSticked());
        this.isBottomSticked(this._isBottomSticked());
        this.topOffset(this._getTopPosition());
    }

    setInterval(function () {
        self._fixPosition();
    }, 200);
}

StickyBlock.prototype._getTopPosition = function () {
    var topOffset = this._isTopSticked() ? this.paddingForSticking + 'px' : '',
        bottomBound = this._getBottomBoundPosition(),
        isBottomSticked = this._isBottomSticked();

    topOffset = isBottomSticked
        ? (bottomBound - this.$block.outerHeight() - this.paddingForSticking) + 'px'
        : topOffset;

    if (isBottomSticked && !this.$bottomStickBoundElement && this.$bottomStickBoundContainer) {
        return 'initial';
    }

    return topOffset;
};

StickyBlock.prototype._isTopSticked = function () {
    return window.pageYOffset > this._getUpperBound() && !this._isBottomSticked();
};

StickyBlock.prototype._isBottomSticked = function () {
    var bottomBoundOffset = this._getBottomBoundOffset(),
        blockHeight = this.blockHeight || this.$block.outerHeight();

    return window.pageYOffset + blockHeight > bottomBoundOffset - this.paddingForSticking;
};

StickyBlock.prototype._fixPosition = function () {
    var contentHeight;

    if (!this._isEnoughSpace()) {
        return;
    }

    var stickType = this._getStickType();

    stickType === 'topSticked'
        ? this.$block.css('margin-left', -window.scrollX + 'px')
        : this.$block.css('margin-left', '');

    this.isTopSticked(this._isTopSticked());
    this.isBottomSticked(this._isBottomSticked());
    this.topOffset(this._getTopPosition());

    contentHeight = this.$block.children().length && this.$block.children().first().outerHeight();

    contentHeight && this.$block.height(contentHeight);

    this.layoutConfig && this.layoutConfig[stickType] && this.layoutConfig[stickType].left && this.$block.css({
        left: this.layoutConfig[stickType].left
    })
};

StickyBlock.prototype._getUpperBound = function () {
    return this.$upperStickBoundElement
        ? this.$upperStickBoundElement.offset().top + this.$upperStickBoundElement.outerHeight() + this.paddingForSticking
        : this.$upperStickBoundContainer.offset().top + this.paddingForSticking;
};

StickyBlock.prototype._getBottomBoundOffset = function () {
    return this.$bottomStickBoundElement
        ? this.$bottomStickBoundElement.offset().top
        : this.$bottomStickBoundContainer.offset().top + this.$bottomStickBoundContainer.outerHeight();
};

StickyBlock.prototype._getBottomBoundPosition = function () {
    return this.$bottomStickBoundElement
        ? this.$bottomStickBoundElement.position().top
        : this.$bottomStickBoundContainer.position().top + this.$bottomStickBoundContainer.outerHeight();
};

StickyBlock.prototype._getLeftBoundOffset = function () {
    return this.$leftStickBoundElement.offset().left + this.$leftStickBoundElement.outerWidth() + this.paddingForSticking;
};

StickyBlock.prototype._getLeftBoundPosition = function () {
    return this.$leftStickBoundElement.position().left + this.$leftStickBoundElement.outerWidth() + this.paddingForSticking;
};

StickyBlock.prototype._getStickType = function () {
    return this.isTopSticked()
        ? 'topSticked'
        : this.isBottomSticked()
        ? 'bottomSticked'
        : 'notSticked;'
};

StickyBlock.prototype._isEnoughSpace = function () {
    var blockHeight = this.blockHeight || this.$block.children().first().outerHeight();
    return (this._getBottomBoundOffset() - this._getUpperBound()) > blockHeight + this.topBottomContainerPaddings;
};

