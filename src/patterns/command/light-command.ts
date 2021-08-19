// @ts-ignore
export interface ICommand {

    execute(): string

}


export class Light {

    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}

var value:number=0
export class RedLight {

    public on(): string {
        return `red${value}`
    }

    public off(): string {
        return "off"
    }

    public increaseLuminosity(): string {
        value++;
        return `red${value}`
    }

    public decreaseLuminosity(): string {
        value--;
        return `red${value}`

    }
}

export class LightOnCommand implements ICommand {

    private _light: Light

    constructor(_light: Light) {
        this._light = _light;
    }

    execute(): string {
        return this._light.on();
    }


}

export class LightOffCommand implements ICommand {
    private _light: Light

    constructor(_light: Light) {
        this._light = _light
    }

    execute(): string {
        return this._light.off()
    }

}


export class RedLightOn implements ICommand {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.on()
    }

}

export class RedLightOff implements ICommand {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.off()
    }

}

export class RedLightIncreaseLuminosity implements ICommand {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLuminosity()
    }

}

export class RedLightDecreaseLuminosity implements ICommand {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLuminosity()
    }

}


export class RemoteInvoker {

    onCommand!: ICommand;

    constructor() {
    }

    setCommand(onCommand: ICommand) {
        this.onCommand = onCommand;
    }

    executeCommand() {
        return this.onCommand.execute()
    }


}
