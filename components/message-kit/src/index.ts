import { Player, world, RawMessage } from "@minecraft/server";
import {
  ActionFormData,
  MessageFormData,
  ModalFormData,
} from "@minecraft/server-ui";
import { getModId, getModName } from "@grindstone/core";

/**
 * Post a message to world.
 * @param message Body of the message.
 * @param players Players that will get the message
 * @param sendToWorld If specified, will send the message to world.
 * @param postByForm If specified, will send the message by ui.
 */
export function postMessage(
  message: string | RawMessage,
  players: Player[],
  sendToWorld?: boolean,
  postByForm?: boolean
): void {
  if (postByForm) {
    const FORM = new MessageFormData()
      .title(getModName())
      .body(message)
      .button1({ translate: "gui.close" })
      .button2({ translate: "gui.confirm" });
    players.forEach((player) => {
      FORM.show(player);
    });
  } else {
    players.forEach((player) => {
      player.sendMessage({
        rawtext: [
          {
            text: "[" + getModId() + "]",
          },
          typeof message === "string" ? { text: message } : message,
        ],
      });
    });
  }
  if (sendToWorld) {
    world.sendMessage({
      rawtext: [
        {
          text: "[" + getModId() + "]",
        },
        typeof message === "string" ? { text: message } : message,
      ],
    });
  }
}

/**
 * Send a welcome message.
 * @param message The welcome message to send.
 */
export function sendWelcomeMessage(
  message: string | RawMessage | (string | RawMessage)[]
): void {
  world.afterEvents.playerSpawn.subscribe((event) => {
    if (event.initialSpawn) {
      event.player.sendMessage(message);
    }
  });
}

/**
 * The `window.alert()` function in game.
 * @param message A message you want to display in the alert dialog.
 * @param player The player(s) to watch the alert dialog.
 */
export function modAlert(
  message: string | RawMessage,
  player: Player[] | Player
): void {
  const alertForm = new ActionFormData()
    .title({
      translate: "createWorld.customize.custom.confirmTitle",
    })
    .body(message)
    .button({
      translate: "gui.confirm",
    });
  if (Array.isArray(player)) {
    player.forEach((player) => {
      alertForm.show(player);
    });
  } else {
    alertForm.show(player);
  }
}

/**
 * The `window.confirm()` function in game.
 * @param message A message you want to display in the confirmation dialog.
 * @param player The player to watch the confirm dialog.
 * @return A boolean indicating whether OK (true) or Cancel (false) was selected.
 */
export function modConfirm(message: string | RawMessage, player: Player) {
  const confirmForm = new MessageFormData()
    .title({
      translate: "createWorld.customize.custom.confirmTitle",
    })
    .body(message)
    .button1({
      translate: "gui.ok",
    })
    .button2({
      translate: "gui.cancel",
    });
  confirmForm.show(player).then((response) => {
    if (response.selection === 0) {
      return true;
    } else {
      return false;
    }
  });
}

/**
 * The `window.prompt` function in game.
 * @param message 
 * @param placeholderText 
 * @param player 
 * @param defaultText 
 */
export function modPrompt(
  message: string | RawMessage,
  placeholderText: string | RawMessage,
  player: Player,
  defaultText?: string
) {
  const promptForm = new ModalFormData()
    .title(getModName())
    .textField(message, placeholderText, defaultText);
  promptForm.show(player).then((response) => {
    return response.formValues;
  });
}
